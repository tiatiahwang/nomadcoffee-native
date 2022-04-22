import styled from 'styled-components/native';

const SAvatar = styled.Image<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
`;

interface Props {
  url: string;
  size: number;
}

const Avatar = ({ size, url }: Props) => {
  return (
    <SAvatar
      size={size}
      defaultSource={require('../assets/user.png')}
      source={{ uri: url !== null ? url : '../assets/user.png' }}
      resizeMode="cover"
      style={{
        borderColor: '#e5e5e5',
        borderWidth: 1,
      }}
    />
  );
};

export default Avatar;
