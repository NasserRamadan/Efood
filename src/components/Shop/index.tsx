import {
  Container,
  Descricao,
  Card,
  Nome,
  Nota,
  TituloContainer,
  Infos
} from './style';
import Tag from '../Tag';
import Button from '../Button';
import star from '../../assets/images/star.svg';
import { MenuItemsType } from '../../pages/Perfil';

type Props = {
  type: string
  name: string
  description: string
  image: string
  nota: number
  id: number
  infos: string[]
  destacado: boolean
  cardapio: MenuItemsType[]
}

const Shop = ({ type, name, description, image, nota, infos, id }: Props) => (
  <Card>
    <img src={image} alt={type} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Container>
      <TituloContainer>
        <Nome>{name}</Nome>
        <Nota>
          {nota}
          <img src={star} alt="estrela" />
        </Nota>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Button type={'link'} to={`/perfil/${id}`} title={'name'}>
        Saiba mais
      </Button>
    </Container>
  </Card>
);

export default Shop;
