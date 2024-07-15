import { RestaurantType } from '../../pages/Home';
import Shop from '../Shop';

import { ContainerShops, List } from './style';

type Props = {
  restaurants: RestaurantType[]
}

const getTags = (restaurants: RestaurantType) => {
  const tags = [];

  if (restaurants.destacado) {
    tags.push('Destaque da semana');
  }

  if (restaurants.tipo) {
    tags.push(
      restaurants.tipo.charAt(0).toUpperCase() + restaurants.tipo.slice(1)
    );
  }
  return tags;
};

const ShopList = ({ restaurants }: Props) => {
  return (
    <ContainerShops>
      <List>
        {restaurants.map((restaurante) => (
          <Shop
            key={restaurante.id}
            type={restaurante.tipo}
            name={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            nota={restaurante.avaliacao}
            id={restaurante.id}
            infos={getTags(restaurante)}
            destacado={restaurante.destacado}
            cardapio={restaurante.cardapio}
          />
        ))}
      </List>
    </ContainerShops>
  );
};

export default ShopList;
