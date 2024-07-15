import { useParams } from 'react-router-dom';

import { useGetMenuQuery, useGetRestaurantIdQuery } from '../../services/api';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import PlateList from '../../components/PlateList';

import { Container } from '../../styles';

export type MenuItemsType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  menu: string[]
}

export type MenuType = {
  titulo: string
  tipo: string
  capa: string
}

const Perfil = () => {
  const { id } = useParams();
  const { data: menuState } = useGetMenuQuery(id!);
  const { data: shopState } = useGetRestaurantIdQuery(id!);

  if (menuState && shopState) {
    return (
      <>
        <Header />
        <Banner restaurant={shopState} />
        <Container>
          <PlateList foods={menuState} />
        </Container>
      </>
    );
  }

  return <h3>Carregando...</h3>;
};

export default Perfil;
