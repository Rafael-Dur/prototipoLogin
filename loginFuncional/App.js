import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ValidateMailScreen from './screens/ValidateMailScreen';
import SecurityCodeScreen from './screens/SecurityCodeScreen';
import HomeScreen from './screens/HomeScreen';
import NewShipment from './components/NewShipment';
import ServiceSelection from './screens/ServiceSelection';
import ShipmentPage from './screens/ShipmentPage';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ShipmentForm3 from './screens/ShipmentForm3';
import ShipmentForm4 from './screens/ShipmentForm4';
import ShipmentMethodScreen from './screens/ShipmentMethodScreen';
import ShipmentForm1 from './screens/ShipmentForm1';
import ShipmentForm2 from './screens/ShipmentForm2';
import ShipmentForm5 from './screens/ShipmentForm5';

const Stack = createStackNavigator();

// Mantener visible el splash screen mientras se cargan los recursos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        // Cargar fuentes personalizadas
        await Font.loadAsync({
          Delivery: require('./assets/fonts/Delivery_A_CdBlk.ttf'),
          Delivery2: require('./assets/fonts/Delivery_A_CdLt.ttf'),
        });
        // Simular una carga lenta (puedes eliminarlo si no lo necesitas)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true); // Indicar que la app está lista
      }
    }

    prepareApp();
  }, []);

  // Una vez la app esté lista, ocultamos el Splash Screen
  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync(); // Ocultar splash cuando la app esté lista
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // Mostrar splash personalizado mientras la app se carga
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('./assets/splashDHL.png')} // Ruta de la imagen de splash
          style={styles.splashImage}
          resizeMode="cover" // Asegura que la imagen cubra toda la pantalla
        />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Validate_Mail"
              component={ValidateMailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Security_Code"
              component={SecurityCodeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reset_Password"
              component={ResetPasswordScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewShipment"
              component={NewShipment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServiceSelection"
              component={ServiceSelection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShipmentMethodScreen"
              component={ShipmentMethodScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethodScreen"
              component={PaymentMethodScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShipmentForm1"
              component={ShipmentForm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShipmentForm2"
              component={ShipmentForm2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShipmentForm4"
              component={ShipmentForm4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShipmentForm3"
              component={ShipmentForm3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShipmentForm5"
              component={ShipmentForm5}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Color de fondo mientras se carga la imagen
  },
  splashImage: {
    width: '100%', // Asegura que cubra toda la pantalla
    height: '100%',
  },
});
