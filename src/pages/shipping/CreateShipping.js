import React from 'react'
import { Formik, Form } from "formik";
import { Wrapper,Container, Errors} from '../../styled-components';
import { shippingSchema } from './validations';
import { routes } from '../../router';
import { createService } from '../../service';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { dataHelper } from './helpers';
import { usePreventSubmit } from '../../hooks';
import {TitleAndLinkOne, FieldFormInput, LinkTwoForm, ButtonForm, SelectField } from "../../components/form";
import { useErrorTime } from '../../hooks/useErrorTime';
import { Toaster, toast } from 'react-hot-toast';

const CreateShippingPage = () => {
  const { userData } = useSelector((state) => state.login);
  const {userId} = userData.data
  const [send, setSend] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const handleKeyDown = usePreventSubmit()
  const {textError, setTextError} = useErrorTime()
  const [dataState, setDataState] = React.useState([])
  const [dataCity, setDataCity] = React.useState([])

  return (
    <>
      <Container>
        <Wrapper marginTop='30px'>
          <TitleAndLinkOne title='Datos de envio'
            route={routes.home} myText={'Ir al Inicio'}
            condition={send} />
          <Formik
            initialValues={{
              address: "",
              height: "",
              state: "",
              city: "",
              areacode:"",
              phone:""
            }}
            validationSchema={shippingSchema}
            onSubmit={async (myvalues, { resetForm }) => {
              let myItem = dataState.filter(item => item.id === myvalues.state && item)
              let prov = myItem.reduce(el => el)
              let mySecondItem = dataCity.filter(item => item.id === myvalues.city && item)
              let ciu = mySecondItem.reduce(el => el)
              resetForm();
              try {
                let value = {
                  address:myvalues.address,
                  height:myvalues.height,
                  state:prov.nombre,
                  city:ciu.nombre,
                  areacode:myvalues.areacode,
                  phone:myvalues.phone,
                  userData:userId 
                }
                setSend(true)
                const dataReceived = await createService(value, 'user-info');
                if (dataReceived.statuscode === 201) {
                  console.log("success shipping", dataReceived);
                  setSuccess(true)
                  toast.success("Datos cargados")
                } else {
                  setSend(false)
                  throw dataReceived
                }
                
              } catch (err) {
                console.log(err.errorcode, err.message);
                setTextError(err.message)
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                {dataHelper.map(item => (
                  <FieldFormInput key={item.id} item={item} condition={send} />
                ))}
                <SelectField setDataState={setDataState} dataState={dataState} 
                  route='provincias'
                  dataCity={dataCity} setDataCity={setDataCity} /> 
                <ButtonForm condition={send} myText={'Siguiente'} />
              </Form>
            )}
          </Formik>
          <LinkTwoForm condition={send} myText='Volver a mi cuenta' route={routes.account} />
        </Wrapper>
          {success && <Toaster/>}
          {success && <Navigate to={routes.account}/>}        
        {textError !== '' && <Errors>{textError}</Errors>}
      </Container>
    </>
  )
}

export default CreateShippingPage;
