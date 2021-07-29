// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { AppLoading } from 'expo';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import DraftbitTheme from './themes/DraftbitTheme.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import ListofCampaignScreen from './screens/ListofCampaignScreen.js';
import CommissionReportScreen from './screens/CommissionReportScreen.js';


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
function CommissionReportScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="CommissionReportScreen">
      <Stack.Screen
        name="CommissionReportScreen"
        component={CommissionReportScreen}
        options={{
          title: 'Báo cáo doanh số', //Set Header Title
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
const config = {
  screens: {
    ListofCampaignScreenStack:'campaign',
    ListofCampaignScreen:'hot',
    CommissionReportScreenStack:'report',
    CommissionReportScreen:'order'},
};

const linking = {
  prefixes: ['https://koc.zaly.me', 'http://localhost:19006'],
  config,
};
function App() {
  return (
    <ThemeProvider theme={DraftbitTheme}>
      <NavigationContainer linking={linking}>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="ListofCampaignScreenStack"
          options={{ drawerLabel: 'Chiến dịch hoa hồng' }}
          component={ListofCampaignScreenStack}
        />
        <Drawer.Screen
          name="CommissionReportScreenStack"
          options={{ drawerLabel: 'Báo cáo' }}
          component={CommissionReportScreenStack}
        />
       
      </Drawer.Navigator>
    </NavigationContainer>
  </ThemeProvider>
    
  );
}

export default App;
