import React from "react";
import Card from "../../components/card";
import { ItemsSelected } from "./components";
import {
  Container,
  Wrapper,
  ContainerProducts,
  Selected,
  ContainerItemOne,
  TitlleShowProducts,
  ContainerSidAndProd
} from "./styled-components/products";
import { MdArrowDropDown } from "react-icons/md";
import { useFetchProducts, useOutsideClick } from "../../hooks";
import { CardProduct } from "./components";
import { Sidebar } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cart";
import { useProducts } from "../../hooks";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { routes } from "../../router/helpers";

const ProductsPage = () => {
  const arrowRef = React.useRef(null);
  const { open, handleButton, handleStopClick } = useOutsideClick(arrowRef);
  const [params] = useSearchParams()
  
  const { searching } = useProducts();

  const { list, cart } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch() 
  const {search} = useLocation()
  const navigate = useNavigate()
  useFetchProducts(search, searching, params.get('price'))

  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list)); 
  }, [list]);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); 
  }, [cart]);

  const add = (id, stock, value) => {
    if(stock <= value) return 
    dispatch(addToCart(id));
    !isAuth && navigate(routes.login)
  };

  return (
    <Container>
      <Wrapper>
        <ContainerProducts>
          <ContainerItemOne>
            <Selected>
              <div>
                <span>Ordenar por</span>
                <div onClick={handleButton} ref={arrowRef}>
                  <MdArrowDropDown />
                </div>
              </div>
              <TitlleShowProducts>Mostrando {list.length} productos</TitlleShowProducts>
            </Selected>
            <div onClick={handleStopClick}>
              <Card
                myComponent={<ItemsSelected open={open} />}
                mystyles={{
                  height: "auto",
                }}
              />
            </div>
          </ContainerItemOne>
          <ContainerSidAndProd>
            <Sidebar/>
            <CardProduct list={list} add={add} cart={cart} />
          </ContainerSidAndProd>
        </ContainerProducts>
      </Wrapper>
    </Container>
  );
};

export default ProductsPage;