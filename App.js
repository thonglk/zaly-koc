// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import ListofCampaignScreen from './screens/ListofCampaignScreen.js';


// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function ListofCampaignScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ListofCampaignScreen">
      <Stack.Screen
        name="ListofCampaignScreen"
        component={ListofCampaignScreen}
        options={{
          title: 'Zaly KOC', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#304057', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

// function secondScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="SecondPage"
//         component={SecondPage}
//         options={{
//           title: 'Second Page', //Set Header Title
//         }}
//       />
//       <Stack.Screen
//         name="ThirdPage"
//         component={ThirdPage}
//         options={{
//           title: 'Third Page', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="ListofCampaignScreenStack"
          options={{ drawerLabel: 'ListofCampaignScreenStack' }}
          component={ListofCampaignScreenStack}
        />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
