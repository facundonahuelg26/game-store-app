import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useGetShipping } from "../../hooks/useGetShipping";
import { routes } from "../../router";
import { Data, NameAccount, OrderTitle, Wrapper } from "./styled-components";
import { AccountContainer } from "./styled-components";
import { UpdateInfo } from "./components";

const AccountPage = () => {
  const { userData } = useSelector((state) => state.login);
  const { shippingData } = useSelector((state) => state.shipping);
  const navigate = useNavigate()
  
  const { name, lastname, email, userId } = userData.data;

  useGetShipping(userId);

  let myShipping = shippingData === null ? <p>Cargando...</p> : !shippingData.yourData ? shippingData.result : shippingData.yourData 
  
  const myData = [
    {id:1, item: `Mi dirección es ${myShipping.address}
    ${myShipping.height}`},
    {id:2, item: `Soy de ${myShipping.city} en prov. de 
    ${myShipping.state}`},
    {id:3, item:`Mi teléfono es ${myShipping.areacode} 
    ${myShipping.phone}`}
  ]

  const handleClick = (id) => {
    navigate(`/shipping-info/:${id}`)    
  }
  
  return (
    <AccountContainer>
      <Wrapper>
        <Data>
          <h1>Mi cuenta</h1>
          <NameAccount>
            Soy {name} {lastname}
          </NameAccount>
          <p>Mi email es {email}</p>
          {
            shippingData !== null && ( shippingData.yourData
            ? <>
                <p>{shippingData.yourData}</p>
                <Link to={routes.shipping}>Registrar datos de envio</Link>
              </>
            : myData.map(({item, id}) => <UpdateInfo key={id} item={item} id={id} handleClick={handleClick}/>))
          }
        </Data>
        {
          !myShipping.clientId || myShipping.clientId === '1'
          ? <OrderTitle><p>No tenes pedidos realizados</p></OrderTitle>
          : <OrderTitle><Link to={routes.orders}>Tus pedidos realizados</Link></OrderTitle>
        }
      </Wrapper>
    </AccountContainer>
  );
};

export default AccountPage;
