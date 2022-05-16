import React from "react";
import { loginSuccess, loginFail} from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import {Container, Wrapper, Errors} from "../../styled-components";
import { isLoggedSchema } from "./validations/validations";
import { createService } from "../../service";
import { dataHelper } from "./helpers/index";
import { usePreventSubmit } from "../../hooks";
import {TitleAndLinkOne, FieldFormInput, LinkTwoForm, ButtonForm } from "../../components/form";
import { routes } from "../../router";
import { useErrorTime } from "../../hooks/useErrorTime";


const LoginPage = () => {
  const { isAuth, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const {textError, setTextError} = useErrorTime();

  const handleKeyDown = usePreventSubmit()
  
  return (
      <Container>
        <Wrapper marginTop="200px">
          <TitleAndLinkOne condition={isAuth} 
            title='Iniciar sesión' 
            route={routes.home}
            myText='Ir al Inicio'/>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={isLoggedSchema}
            onSubmit={async (myvalues, { resetForm }) => {
              resetForm();
              try {
                dispatch(loginFail({ error: false }));
                let value = {
                  email: myvalues.email,
                  password: myvalues.password,
                };
                const userReceived = await createService(value, "auth/signin");

                if (userReceived.statuscode === 201) {
                  localStorage.setItem('accessJWT', JSON.stringify(userReceived.result))
                  dispatch(loginSuccess({isAuth: true}));
                  window.location.href = 'https://facundonahuelg26.github.io/game-store-app'
                } else {
                  dispatch(loginFail({ error: true }));
                  localStorage.removeItem('accessJWT')
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
                {dataHelper.map((item) => (
                  <FieldFormInput key={item.id} condition={isAuth} item={item} />
                ))}
                <ButtonForm condition={isAuth} myText={'Siguiente'} />
              </Form>
            )}
          </Formik>
          <LinkTwoForm condition={isAuth} myText='Crear Cuenta'
            route={routes.register} />
        </Wrapper>
        {error && <Errors>{textError}</Errors>}
      </Container>
  );
};

export default LoginPage;