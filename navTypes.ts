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
  CreateAccount: undefined;
  Login: { username: string; password: string };
  Photo: { id: number };
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

export type CreateAccountScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'CreateAccount'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<TabsNavParamList>
  >
>;

export type LoginScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Login'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<TabsNavParamList>
  >
>;

export type SearchScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Search'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<TabsNavParamList>
  >
>;

export type PhotoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Photo'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<TabsNavParamList>
  >
>;
