import { Fundo } from './syles';
import vectorFundo from '../../assets/images/vectorFundo.png';
import logo from '../../assets/images/logo_efood.svg';

const Hero = () => (
  <Fundo style={{ backgroundImage: `url(${vectorFundo})` }}>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </div>
  </Fundo>
);

export default Hero;
