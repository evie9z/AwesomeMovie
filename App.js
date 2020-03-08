import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Tickets from "./src/screens/Tickets";
import Profile from "./src/screens/Profile";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="My Tickets" component={Tickets} />
        <Drawer.Screen name="My Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
