import { TagContainer } from './style';

export type Props = {
  size?: 'big' | 'small'
  children: string
}

const Tag = ({ children, size = 'big' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
);

export default Tag;
