import { useReactiveVar } from '@apollo/client';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { isLoggedInVar } from '../apollo/vars';
import Avatar from '../components/Avatar';
import TabIcons from '../components/nav/TabIcons';
import useMe from '../hooks/useMe';
import { TabsNavParamList } from '../navTypes';
import SharedStackNav from './SharedStackNav';

const Tab = createBottomTabNavigator<TabsNavParamList>();

const TabsNav = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useMe();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: 'rgba(255, 255, 255, 0.3)',
        },
        tabBarActiveTintColor: '#d0b894',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              name={'home'}
              focusedName={'home-outline'}
              focused={focused}
              color={color}
              size={24}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Home" />}
      </Tab.Screen>
      <Tab.Screen
        name="SearchTab"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              name={'search'}
              focusedName={'search-outline'}
              focused={focused}
              color={color}
              size={24}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tab.Screen>
      {isLoggedIn && (
        <Tab.Screen
          name="CameraTab"
          component={View}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                name={'camera'}
                focusedName={'camera-outline'}
                focused={focused}
                color={color}
                size={24}
              />
            ),
          }}
        />
      )}
      {isLoggedIn && (
        <Tab.Screen
          name="NotificationsTab"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                name={'heart'}
                focusedName={'heart-outline'}
                focused={focused}
                color={color}
                size={24}
              />
            ),
          }}
        >
          {() => <SharedStackNav screenName="Notifications" />}
        </Tab.Screen>
      )}
      <Tab.Screen
        name="MeTab"
        options={{
          tabBarIcon: ({ color, focused }) =>
            data?.me ? (
              <Avatar src={data?.me?.avatarURL} size={24} focused={focused} />
            ) : (
              <TabIcons
                name={'person'}
                focusedName={'person-outline'}
                focused={focused}
                color={color}
                size={24}
              />
            ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabsNav;
