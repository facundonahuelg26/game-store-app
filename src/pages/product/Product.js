import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { ButtonForm } from "../../components/form";
import { usePreventSubmit } from "../../hooks";
import { getServiceById, createService } from "../../service";
import { Errors } from "../../styled-components";
import { Items } from "./components/Items";
import { Messages } from "./components";
import {
  ContainerWrapper,
  Wrapper,
  ContainerItems,
  ContainerButtonForm,
  WrapperField
} from "./styled-components/product";
import { messageSchema } from "./validations";
import { useSelector } from "react-redux";


const ProductPage = () => {
  const [product, setProduct] = React.useState({});
  const [messages, setMessages] = React.useState([]);
  const { id } = useParams();
  const handleKeyDown = usePreventSubmit();
  const { userData } = useSelector((state) => state.login);
 
  React.useEffect(() => {
    (async () => {
      const res = await getServiceById(`products/${id}`);
      setProduct(res.result);
    })();
  }, [id]);

  React.useEffect(() => {
    (async () => {
      const res = await getServiceById(`message/${id}`);
      setMessages(res.result);
    })();
  }, [id]);

  return (
    <ContainerWrapper>
      <Wrapper>
        <ContainerItems>
          <Items product={product} id={id} />
          <Formik
            initialValues={{
              message: "",
            }}
            validationSchema={messageSchema}
            onSubmit={async (myvalues, { resetForm }) => {
              resetForm();
              try {
                let value = { 
                  message: myvalues.message, 
                  product:id,
                  userId:userData.data.userId
                };
                
                const messageReceived = await createService(value, "message");

                if (messageReceived.statuscode === 201) {
                  setMessages([...messages,messageReceived.result])
                } else {
                  throw messageReceived;
                }
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <h2>¿Tenés preguntas sobre el producto?</h2>
                <WrapperField>
                <Field name="message" as="textarea" />
                <ErrorMessage name="message" component={Errors} />
                <ContainerButtonForm>
                <ButtonForm myText="Enviar mensaje" />
                </ContainerButtonForm>
                </WrapperField>
                {/* <ButtonForm condition={isAuth} myText='Enviar pregunta' /> */}
              </Form>
            )}
          </Formik>

          {/* {error && <Errors>{textError}</Errors>} */}
          {messages.length === 0 
            ? <p>Todavia no se han realizado preguntas por el producto</p>
            : messages.map(msj => <Messages 
                key={msj._id} 
                msj={msj}
                id={id} 
              />)
          }
        </ContainerItems>
      </Wrapper>
    </ContainerWrapper>
  );
};

export default ProductPage;