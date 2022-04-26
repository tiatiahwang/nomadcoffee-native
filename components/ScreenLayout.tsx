import { ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../colors';

interface Props {
  loading: boolean;
  children: ReactNode;
}

const ScreenLayout = ({ loading, children }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {loading ? <ActivityIndicator color={colors.ivory} /> : children}
    </View>
  );
};

export default ScreenLayout;
