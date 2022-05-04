import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type LoggedOutNavParamList = {
  TabsNav: undefined;
  LogInNav: undefined;
};

export type LogInNavParamList = {
  Login: { username: string; password: string };
  CreateAccount: undefined;
};

export type LoginScreenProps = CompositeScreenProps<
  NativeStackScreenProps<LogInNavParamList, 'Login'>,
  NativeStackScreenProps<LoggedOutNavParamList>
>;

export type CreateAccountScreenProps = CompositeScreenProps<
  NativeStackScreenProps<LogInNavParamList, 'CreateAccount'>,
  NativeStackScreenProps<LoggedOutNavParamList>
>;

export type LoggedInNavParamList = {
  TabsNav: undefined;
  UploadNav: undefined;
  UploadForm: { file: string };
};

export type UploadFormScreenProps = NativeStackScreenProps<
  LoggedInNavParamList,
  'UploadForm'
>;

export type UploadNavParamList = {
  SelectPhotoNav: undefined;
  TakePhotoNav: undefined;
};

export type SelectPhotoNavScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UploadNavParamList, 'SelectPhotoNav'>,
  NativeStackScreenProps<LoggedInNavParamList>
>;

export type TakePhotoNavScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UploadNavParamList, 'TakePhotoNav'>,
  NativeStackScreenProps<LoggedInNavParamList>
>;

export type SelectPhotoNavParamList = {
  SelectPhoto: undefined;
};

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

export type PhotoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Photo'>,
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
