import { useReactiveVar } from '@apollo/client';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isLoggedInVar } from '../apollo/vars';
import TabIcons from '../components/nav/TabIcons';
import { TabsNavParamList } from '../navTypes';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tabs = createBottomTabNavigator<TabsNavParamList>();

const TabsNav = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const size = 24;
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              color={color}
              focused={focused}
              size={size}
              name="home"
              focusedName="home-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SearchTab"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              color={color}
              focused={focused}
              size={size}
              name="search"
              focusedName="search-outline"
            />
          ),
        }}
      />
      {isLoggedIn ? (
        <Tabs.Screen
          name="ProfileTab"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                color={color}
                focused={focused}
                size={size}
                name="person"
                focusedName="person-outline"
              />
            ),
          }}
        />
      ) : (
        <Tabs.Screen
          name="LoginTab"
          component={Login}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                color={color}
                focused={focused}
                size={size}
                name="person"
                focusedName="person-outline"
              />
            ),
          }}
        />
      )}
    </Tabs.Navigator>
  );
};

export default TabsNav;
