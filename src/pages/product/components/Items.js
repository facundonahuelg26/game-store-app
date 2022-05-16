import React from "react";
import {
  ItemsProduct,
  BigImage,
  MiniImage,
  Title,
  ContainerText,
  Price,
  DataText,
  ContainerIconText,
  ContainerButton,
} from "../styled-components";
import { GiCheckedShield } from "react-icons/gi";
import { BsCheck2All } from "react-icons/bs";
import { FaTruckMoving, FaTimes } from "react-icons/fa";
import Button from "../../../components/button";
import { routes } from "../../../router";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../store/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import IconCart from "../../../components/iconCart";

export const Items = ({ product, id }) => {
  const { isAuth } = useSelector((state) => state.login);
  const { cart } = useSelector((state) => state.cart);
  const [value, setValue] = React.useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    cart.filter((item) => item._id === id && setValue(item.quantity));

  }, [cart, id])

  const add = () => {
    if(product.stock <= value) return 
    dispatch(addToCart(id));
    !isAuth && navigate(routes.login)
  };
  return (
    <ItemsProduct>
      <div>
        <BigImage>
          <img src={product.imageLarge} alt={product.name} />
        </BigImage>
        <MiniImage>
          <img src={product.image} alt={product.name} />
        </MiniImage>
      </div>
      <ContainerText>
        <Title>
          <h1>{product.name}</h1>
        </Title>
        <Price>
          <h2>$ {product.price}</h2>
        </Price>
        <DataText>
          <ContainerIconText>
            <div>
              <svg>
                <GiCheckedShield />
              </svg>
            </div>
            <p>Garantia 6 meses</p>
          </ContainerIconText>
          {product.stock <= value 
            ? <ContainerIconText stock={product.stock} value={value}>
            <div>
              <svg>
                <FaTimes />
              </svg>
            </div>
            <p>No hay stock disponible</p>
            </ContainerIconText>
            : <ContainerIconText>
            <div>
              <svg>
                <BsCheck2All />
              </svg>
            </div>
            <p>Stock disponible</p>
            </ContainerIconText>
          }
          <ContainerIconText>
            <div>
              <svg>
                <FaTruckMoving />
              </svg>
            </div>
            <p>Envios a todo el país</p>
          </ContainerIconText>
        </DataText>
        <ContainerButton>
          <Button
            myType="button"
            mystyles={{
              background: product.stock <= value ? '#9b9b9b' : '#000000',
              color: product.stock <= value ? '#cdcdcd' : '#61dafb',
            }}
            myFunction={add}
          >
            Sumar al carrito
          </Button>
          { !isAuth 
            ? null 
            : value && <IconCart value={value}/>
          }
        </ContainerButton>
      </ContainerText>
    </ItemsProduct>
  );
};
