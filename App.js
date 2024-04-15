
import Home from './srceens/Home';
import Login from './srceens/auth/Login';
import Register from './srceens/auth/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToolsList from './srceens/ToolsList';
import BottomBar from './components/Layout/BottomBar';
import Vehicle from './srceens/Vehicle';
import Profile from './srceens/Profile';
import Welcome from './srceens/Welcome';


// routes
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StartingPage"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Tools" component={ToolsList} />
          <Stack.Screen name="Vehicle" component={Vehicle} />
          <Stack.Screen name="Profile" component={Profile} />



        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


