import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../colors';
import { UploadNavParamList } from '../navTypes';
import TakePhoto from '../screens/TakePhoto';
import SelectPhotoNav from './SelectPhotoNav';

const Tab = createMaterialTopTabNavigator<UploadNavParamList>();

const UploadNav = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: {
          backgroundColor: colors.ivory,
          marginBottom: 48,
        },
      }}
    >
      <Tab.Screen
        name="SelectPhotoNav"
        component={SelectPhotoNav}
        options={{ title: '사진 선택' }}
      />
      <Tab.Screen
        name="TakePhotoNav"
        component={TakePhoto}
        options={{ title: '카메라' }}
      />
    </Tab.Navigator>
  );
};

export default UploadNav;
