import React from "react";
import { Formik, Form } from "formik";
import {Wrapper,Container,Errors} from "../../styled-components";
import { registerSchema } from "./validations";
import { routes } from "../../router/helpers/helperRoutes";
import { createService } from "../../service";
import { Navigate, useLocation} from "react-router-dom";
import { dataHelper } from "./helpers";
import { FieldFormInput } from "../../components/form/FieldFormInput";
import { usePreventSubmit } from "../../hooks";
import { useErrorTime } from "../../hooks/useErrorTime";
import { ButtonForm, LinkTwoForm, TitleAndLinkOne } from "../../components/form";

const RegisterPage = () => {
  const [user, setUser] = React.useState(null)
  const location = useLocation()
  const {textError, setTextError} = useErrorTime();
  const handleKeyDown = usePreventSubmit()

  return (
    <>
      <Container>
        <Wrapper marginTop='100px'>
          <TitleAndLinkOne condition={user} route={routes.home} 
          title='Registrarse' myText='Ir al Inicio' />
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={async (myvalues, { resetForm }) => {
              resetForm();
              try {
                let value = {
                  name:myvalues.name,
                  lastname:myvalues.lastname,
                  email:myvalues.email,
                  password:myvalues.password 
                }
                const userReceived = await createService(value, 'auth/signup');
                if (userReceived.statuscode === 201) {
                  console.log("success register", userReceived);
                  setUser(userReceived)
                }else {  
                  setUser(null)
                  throw userReceived;
                }
              } catch (err) {
                console.log(err);
                setTextError(err.message)
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                {dataHelper.map(item => (
                  <FieldFormInput key={item.id} item={item} condition={user} />
                ))}
                <ButtonForm myText='Siguiente' condition={user} />
              </Form>
            )}
          </Formik>
          <LinkTwoForm route={routes.login} myState={{from:location}} myText='Iniciar Sesión' 
          condition={user} />
        </Wrapper>
          {user !== null && <Navigate to={routes.login} state={{from:location}}/>}        
        {textError !== '' && <Errors>{textError}</Errors>}
      </Container>
    </>
  );
};

export default RegisterPage;
