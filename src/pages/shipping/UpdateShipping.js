import React from "react";
import { Formik, Form } from "formik";
import { Wrapper, Container, Errors } from "../../styled-components";
import { shippingSchema } from "./validations";
import { routes } from "../../router";
import { updateServiceById } from "../../service";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  ButtonForm,
  FieldFormInput,
  LinkTwoForm,
  SelectField,
  TitleAndLinkOne,
} from "../../components/form";
import { useErrorTime } from "../../hooks/useErrorTime";
import { dataAddress, dataPhone } from "./helpers";
import { usePreventSubmit } from "../../hooks";

const UpdateShippingPage = () => {
  const { userData } = useSelector((state) => state.login);
  const { userId } = userData.data;
  const { shippingData } = useSelector((state) => state.shipping);
  const handleKeyDown = usePreventSubmit()
  const [send, setSend] = React.useState(false);
  const { textError, setTextError } = useErrorTime();
  const [dataState, setDataState] = React.useState([]);
  const [dataCity, setDataCity] = React.useState([]);

  let { id } = useParams();
  let navigate = useNavigate();
  
  React.useEffect(() => {
    localStorage.setItem("shipping", JSON.stringify(shippingData)); 
  }, [shippingData]);

  return (
    <>
      <Container>
        <Wrapper marginTop="150px">
          <TitleAndLinkOne
            title="Datos de envio"
            route={routes.home}
            myText={"Ir al Inicio"}
            condition={send}
          />
          <Formik
            initialValues={{
              address: shippingData.result.address,
              height: shippingData.result.height,
              state: shippingData.result.state,
              city: shippingData.result.city,
              areacode: shippingData.result.areacode,
              phone: shippingData.result.phone,
            }}
            validationSchema={shippingSchema}
            onSubmit={async (myvalues, { resetForm }) => {
                let myItem = dataState.filter(item => item.id === myvalues.state && item)
                let prov = myItem.length > 0 && myItem.reduce(el => el) 
                let mySecondItem = dataCity.filter(item => item.id === myvalues.city && item)
                let ciu = mySecondItem.length > 0 && mySecondItem.reduce(el => el) 

              resetForm();

              try {
                let value = {
                  address: myvalues.address,
                  height: myvalues.height,
                  state:prov.nombre || shippingData.result.state,
                  city:ciu.nombre || shippingData.result.city,
                  areacode: myvalues.areacode,
                  phone: myvalues.phone,
                  userData: userId,
                };
                const dataReceived = await updateServiceById(
                  value,
                  `user-info/${userId}`
                );
                if (dataReceived.statuscode === 200) {
                  console.log("success update", dataReceived);
                  setSend(true);
                  navigate(routes.account);
                } else {
                  setSend(false);
                  throw dataReceived;
                }
              } catch (err) {
                console.log(err);
                setTextError(err);
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                {id === ":1" &&
                  dataAddress.map((item) => (
                    <FieldFormInput
                      key={item.id}
                      item={item}
                      condition={send}
                    />
                  ))}

                {id === ":2" && (
                  <SelectField
                    setDataState={setDataState}
                    dataState={dataState}
                    route="provincias?campos=id,nombre"
                    dataCity={dataCity}
                    setDataCity={setDataCity}
                  />
                )}
                {id === ":3" &&
                  dataPhone.map((item) => (
                    <FieldFormInput
                      key={item.id}
                      item={item}
                      condition={send}
                    />
                  ))}
                <ButtonForm condition={send} myText={"Siguiente"} />
              </Form>
            )}
          </Formik>
          <LinkTwoForm
            condition={send}
            myText="Volver a mi cuenta"
            route={routes.account}
          />
        </Wrapper>
        {textError !== "" && <Errors>{textError}</Errors>}
      </Container>
    </>
  );
};

export default UpdateShippingPage;
