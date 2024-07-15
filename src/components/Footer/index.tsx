import logo from '../../assets/images/logo_efood.svg';
import insta from '../../assets/images/insta.svg';
import face from '../../assets/images/face.svg';
import twitter from '../../assets/images/twitter.svg';

import { Fundo } from './styles';

const Footer = () => (
  <Fundo>
    <img src={logo} alt="EFOOD" />
    <div className="media">
      <img src={insta} alt="Instagram" />
      <img src={face} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </Fundo>
);

export default Footer;