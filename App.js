import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Home from "./src/screens/Home";
import Tickets from "./src/screens/Tickets";
import Profile from "./src/screens/Profile";
import { enableScreens } from "react-native-screens";

enableScreens();

const drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    Ticket: { screen: Tickets }
  },
  {
    initialRouteName: "Home",
    drawerPosition: "left",
    drawerBackgroundColor: "#2C2C2C",
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#545454",
      inactiveTintColor: "#fff"
    }
  }
);

export default createAppContainer(drawer);
