import { Container } from './styles';

type Props = {
  children: JSX.Element
  title: string
  className?: string
}

const Input = ({ children, title, className }: Props) => {
  return (
    <Container className={className}>
      <p>{title}</p>
      {children}
    </Container>
  );
};

export default Input;
