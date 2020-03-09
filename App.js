import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Home from "./src/screens/Home";
import Tickets from "./src/screens/Tickets";
import Profile from "./src/screens/Profile";
import { enableScreens } from "react-native-screens";

enableScreens();
const drawer = createDrawerNavigator(
  {
    Home,
    Profile,
    Tickets
  },
  {
    initialRouteName: "Home",
    drawerPosition: "left"
  }
);

const App = createAppContainer(drawer);

export default App;
