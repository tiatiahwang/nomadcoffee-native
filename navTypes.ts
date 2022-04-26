import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TabsNavParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  CameraTab: undefined;
  NotificationsTab: undefined;
  MeTab: undefined;
};

export type SharedNavParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Me: undefined;
  Profile: { username: string };
};

export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Home'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<TabsNavParamList>
  >
>;

export type ProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Profile'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<TabsNavParamList>
  >
>;
