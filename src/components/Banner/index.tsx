import { Container, ImageHeader, ShopName, Tipo } from './styles';
import { MenuType } from '../../pages/Perfil';

type Props = {
  restaurant: MenuType
}

const Banner = ({ restaurant }: Props) => (
  <ImageHeader>
    <img src={restaurant.capa} alt="Imagem header" />
    <Container>
      <Tipo>
        {restaurant?.tipo?.charAt(0).toUpperCase() + restaurant?.tipo?.slice(1)}
      </Tipo>
      <ShopName>{restaurant.titulo}</ShopName>
    </Container>
  </ImageHeader>
);

export default Banner;
