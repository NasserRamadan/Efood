import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { add, open } from '../../store/reducers/cart';

import {
  Descricao,
  Card,
  Nome,
  TextContainer,
  Modal,
  ModalContent
} from './styles';

import { ButtonCar } from '../Button/styles';

import { MenuItemsType } from '../../pages/Perfil';

import close from '../../assets/images/close.png';

type Props = {
  name: string
  description: string
  image: string
  preco: number
  porcao: string
  id: number
  menu: MenuItemsType
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco);
};

export function shortenText(text: string): string {
  if (text.length <= 160) {
    return text;
  }
  const shortenedText = text.slice(0, 160) + '...';
  return shortenedText;
}

const Plate = ({ name, description, image, porcao, preco, menu }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(menu));
    dispatch(open());
    setModalEstaAberto(false);
  };

  return (
    <>
      <Card
        onClick={() => {
          setModalEstaAberto(true);
        }}
      >
        <img src={image} alt={name} />
        <Nome>{name}</Nome>
        <Descricao>{shortenText(`${description}`)}</Descricao>
        <button>Mais detalhes</button>
      </Card>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={image} alt="" />
          <TextContainer>
            <p>{name}</p>
            <div>
              {description} <br /> <br />
              Serve: {porcao}
            </div>
            <ButtonCar onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(preco)}
            </ButtonCar>
            <img
              className="fechar"
              src={close}
              alt="Ícone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </TextContainer>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  );
};

export default Plate;
