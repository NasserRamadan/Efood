import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

import { usePurchaseMutation } from '../../services/api';

import { RootReducer } from '../../store';
import { clear } from '../../store/reducers/cart';
import { closeDelivery } from '../../store/reducers/delivery';
import { closePayment, openPayment } from '../../store/reducers/payment';
import { closeOrder, openOrder } from '../../store/reducers/order';
import { close } from '../../store/reducers/cart';

import { formataPreco } from '../Plate';

import Input from '../Input';

import {
  ButtonContainer,
  Container,
  DeliveryContainer,
  DeliveryPaymentContainer,
  OrderContainer,
  PaymentContainer,
  Row,
  Sidebar
} from './styles';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const { orderIsOpen } = useSelector((state: RootReducer) => state.order);
  const { paymentIsOpen } = useSelector((state: RootReducer) => state.payment);
  const { deliveryIsOpen } = useSelector((state: RootReducer) => state.delivery);

  const dispatch = useDispatch();
  const [purchase, { data, isSuccess }] = usePurchaseMutation();

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;
    return hasError;
  };

  const endDelivery = () => {
    dispatch(closeDelivery());
  };

  const startPayment = () => {
    const nome = document.getElementById('nome') as HTMLInputElement;
    const endereco = document.getElementById('endereco') as HTMLInputElement;
    const cidade = document.getElementById('cidade') as HTMLInputElement;
    const cep = document.getElementById('cep') as HTMLInputElement;
    const numero = document.getElementById('numero') as HTMLInputElement;

    if (
      nome.value === '' ||
      endereco.value === '' ||
      cidade.value === '' ||
      cep.value === '' ||
      numero.value === ''
    ) {
      alert('Os campos em destaque são obrigatórios!');
    } else {
      dispatch(openPayment());
    }
  };

  const endPayment = () => {
    dispatch(closePayment());
  };

  const initOrder = () => {
    const cardName = document.getElementById('cardName') as HTMLInputElement;
    const cardNumber = document.getElementById('cardNumber') as HTMLInputElement;
    const cvv = document.getElementById('cvv') as HTMLInputElement;
    const month = document.getElementById('month') as HTMLInputElement;
    const year = document.getElementById('year') as HTMLInputElement;

    if (
      cardName.value === '' ||
      cardNumber.value === '' ||
      cvv.value === '' ||
      month.value === '' ||
      year.value === ''
    ) {
      alert('O preenchimento de todos os campos é obrigatório!');
    } else {
      dispatch(openOrder());
    }
  };

  const endOrder = () => {
    dispatch(closeOrder());
    dispatch(closePayment());
    dispatch(closeDelivery());
    dispatch(close());
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
    }
  }, [isSuccess, dispatch]);

  const navigate = useNavigate();

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return acumulador + valorAtual.preco;
      }
      return 0;
    }, 0);
  };

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cidade: Yup.string()
        .min(2, 'A cidade precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(5, 'O CEP precisa ter pelo menos 5 caracteres')
        .max(9, 'O CEP pode ter no máximo 8 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .max(5, 'O número pode ter no máximo 5 caracteres')
        .required('Campo obrigatório'),

      cardName: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão precisa ter 16 caracteres')
        .max(19, 'O número do cartão precisa ter 16 caracteres')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV precisa ter 3 caracteres')
        .max(3, 'O CVV pode ter no máximo 3 caracteres')
        .required('Campo obrigatório'),
      month: Yup.string()
        .min(2, 'O mês precisa ter pelo menos 2 caracteres')
        .max(2, 'O mês pode ter no máximo 2 caracteres')
        .required('Campo obrigatório'),
      year: Yup.string()
        .min(2, 'O ano precisa ter pelo menos 2 caracteres')
        .max(4, 'O ano pode ter no máximo 4 caracteres')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      });
    }
  });

  return (
    <>
      {isSuccess && data ? (
        <OrderContainer className={orderIsOpen ? 'order-open' : ''}>
          <Sidebar>
            <Container>
              <p>Pedido realizado - {data.orderId}</p>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br></br>
                <br></br>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br></br>
                <br></br>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br></br>
                <br></br>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>

              <ButtonContainer>
                <button
                  onClick={() => {
                    endOrder();
                    navigate('/');
                    navigate(0);
                  }}
                >
                  Concluir
                </button>
              </ButtonContainer>
            </Container>
          </Sidebar>
        </OrderContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <DeliveryPaymentContainer>
            <DeliveryContainer
              className={deliveryIsOpen ? 'delivery-open' : ''}
            >
              <Sidebar>
                <Container>
                  <p>Entrega</p>
                  <Input title="Quem irá receber">
                    <input
                      id="nome"
                      type="text"
                      name="nome"
                      value={form.values.nome}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('nome') ? 'error' : ''}
                    />
                  </Input>

                  <Input title="Endereço">
                    <input
                      id="endereco"
                      type="text"
                      name="endereco"
                      value={form.values.endereco}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('endereco') ? 'error' : ''}
                    />
                  </Input>
                  <Input title="Cidade">
                    <input
                      id="cidade"
                      type="text"
                      name="cidade"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('cidade') ? 'error' : ''}
                    />
                  </Input>
                  <Row>
                    <Input className="cep" title="CEP">
                      <InputMask
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cep') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </Input>
                    <Input title="Número">
                      <input
                        id="numero"
                        type="text"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('numero') ? 'error' : ''}
                      />
                    </Input>
                  </Row>
                  <Input title="Complemento (opcional)">
                    <input
                      id="complemento"
                      type="text"
                      name="complemento"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('complemento') ? 'error' : ''}
                    />
                  </Input>
                  <ButtonContainer>
                    <button type="submit" onClick={startPayment}>
                      Continuar com o pagamento
                    </button>

                    <button type="button" onClick={endDelivery}>
                      Voltar para o carrinho
                    </button>
                  </ButtonContainer>
                </Container>
              </Sidebar>
            </DeliveryContainer>
            <PaymentContainer className={paymentIsOpen ? 'payment-open' : ''}>
              <Sidebar>
                <Container>
                  <p>
                    Pagamento - Valor a pagar {formataPreco(getTotalPrice())}{' '}
                  </p>
                  <Input title="Nome no cartão">
                    <input
                      id="cardName"
                      type="text"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('cardName') ? 'error' : ''}
                    />
                  </Input>

                  <Row>
                    <Input className="card" title="Número do cartão">
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cardNumber') ? 'error' : ''}
                        mask="9999 9999 9999 9999"
                      />
                    </Input>

                    <Input className="cvv" title="CVV">
                      <InputMask
                        id="cvv"
                        type="text"
                        name="cvv"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cvv') ? 'error' : ''}
                        mask="999"
                      />
                    </Input>
                  </Row>
                  <Row>
                    <Input className="month" title="Mês de vencimento">
                      <InputMask
                        id="month"
                        type="text"
                        name="month"
                        value={form.values.month}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('month') ? 'error' : ''}
                        mask="99"
                      />
                    </Input>

                    <Input title="Ano de vencimento">
                      <InputMask
                        id="year"
                        type="text"
                        name="year"
                        value={form.values.year}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('year') ? 'error' : ''}
                        mask="99"
                      />
                    </Input>
                  </Row>
                  <ButtonContainer>
                    <button type="submit" onClick={initOrder}>
                      Finalizar pagamento
                    </button>
                    <button type="button" onClick={endPayment}>
                      Voltar para edição de endereço
                    </button>
                  </ButtonContainer>
                </Container>
              </Sidebar>
            </PaymentContainer>
          </DeliveryPaymentContainer>
        </form>
      )}
    </>
  );
};

export default Order;
