import { useGetRestaurantsQuery } from '../../services/api';

import Hero from '../../components/Hero';
import ShopList from '../../components/ShopList';

import { MenuItemsType } from '../Perfil';

export type RestaurantType = {
  infos: string[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItemsType[]
}

const Home = () => {
  const { data: shopListState } = useGetRestaurantsQuery();

  if (shopListState) {
    return (
      <>
        <Hero />
        <ShopList restaurants={shopListState} />
      </>
    );
  }
  return <h3>Carregando...</h3>;
};

export default Home;
