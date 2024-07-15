import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Fundo } from './styles';
import vectorFundo from '../../assets/images/vectorFundo.png';
import logo from '../../assets/images/logo_efood.svg';

import { open } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

const Hero = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    if (items.length === 0) return alert('Seu carrinho está vazio');
    dispatch(open());
  };

  return (
    <Fundo style={{ backgroundImage: `url(${vectorFundo})` }}>
      <Container>
        <p>Restaurantes</p>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <p className="carrinho" onClick={openCart}>
          {items.length} produto(s) no carrinho
        </p>
      </Container>
    </Fundo>
  );
};

export default Hero;
