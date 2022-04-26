import styled from 'styled-components/native';

const SAvatar = styled.Image<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
`;

interface Props {
  src: string | null | undefined;
  size: number;
  focused?: boolean;
}

const Avatar = ({ size, src, focused }: Props) => {
  return (
    <SAvatar
      size={size}
      defaultSource={require('../assets/user.png')}
      source={{ uri: src !== null ? src : '../assets/user.png' }}
      resizeMode="cover"
      style={focused && { borderColor: 'white', borderWidth: 2 }}
    />
  );
};

export default Avatar;
