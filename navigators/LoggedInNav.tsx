import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { colors } from '../colors';
import { LoggedInNavParamList } from '../navTypes';
import UploadForm from '../screens/UploadForm';
import TabsNav from './TabsNav';
import UploadNav from './UploadNav';

const Stack = createNativeStackNavigator<LoggedInNavParamList>();

const LoggedInNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen
        name="TabsNav"
        component={TabsNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadNav"
        component={UploadNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadForm"
        component={UploadForm}
        options={{
          title: '사진 업로드',
          headerTintColor: colors.ivory,
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="close" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
