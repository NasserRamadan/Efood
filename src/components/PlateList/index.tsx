import Plate from '../Plate';
import { ContainerShops, List } from './style';
import { MenuItemsType } from '../../pages/Perfil';

type Props = {
  foods: MenuItemsType[]
}

const PlateList = ({ foods }: Props) => {
  return (
    <>
      <ContainerShops>
        <List>
          {foods.map((comida) => (
            <Plate
              key={comida.id}
              name={comida.nome}
              description={comida.descricao}
              image={comida.foto}
              preco={comida.preco}
              porcao={comida.porcao}
              id={comida.id}
              menu={comida}
            />
          ))}
        </List>
      </ContainerShops>
    </>
  );
};

export default PlateList;
