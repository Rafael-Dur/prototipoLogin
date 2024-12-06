import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/InternalHeader";
import Button from "../components/Button"; // Importar el componente Button
import { COLORS } from "../constants/constants";

const { width, height } = Dimensions.get("window");

const ShipmentMethodScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Estado para la opción seleccionada

  const handleNextPress = () => {
    navigation.navigate("ShipmentForm3"); // Navegar a la siguiente pantalla y pasar la opción seleccionada
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Establecer la opción seleccionada
  };
  

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Encabezado con botón de retroceso */}
      <Header showBackButton={true} />

      {/* Contenido principal */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Forma de envío</Text>
          <Text style={styles.subHeaderText}>
            Selecciona cómo quieres entregar el paquete a DHL.
          </Text>
        </View>

        {/* Opciones de envío en dos columnas */}
        <View style={styles.optionsContainer}>
          {/* Opción 1 */}
          <View style={styles.optionColumn}>
            <Text style={styles.subtitle}>Recolección</Text> {/* Subtítulo */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === "recoleccion" && styles.selectedOption, // Aplicar estilo si está seleccionado
              ]}
              onPress={() => handleOptionSelect("recoleccion")}
            >
              <Image
                source={require("../assets/delivery-van.png")}
                style={styles.icon}
              />
              <Text style={styles.optionText}>DHL vendrá a buscar el envío</Text>
            </TouchableOpacity>
          </View>

          {/* Opción 2 */}
          <View style={styles.optionColumn}>
            <Text style={styles.subtitle}>En Sucursal</Text> {/* Subtítulo */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === "sucursal" && styles.selectedOption, // Aplicar estilo si está seleccionado
              ]}
              onPress={() => handleOptionSelect("sucursal")}
            >
              <Image
                source={require("../assets/live-tracking.png")}
                style={styles.icon}
              />
              <Text style={styles.optionText}>Iré a una tienda de DHL</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botón siguiente */}
        <Button
          onPress={() => handleNextPress()} 
          title="Siguiente"
          styleType="default"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: COLORS.grayLight,
    alignItems: "center",
  },
  header: {
    marginBottom: 40,
  },
  headerText: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 20,
    marginTop: 20,
  },
  subHeaderText: {
    fontSize: width * 0.04,
    color: COLORS.grayDark,
    marginTop: 10,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: "row", // Dos columnas en fila
    justifyContent: "space-between",
    marginBottom: height * 0.08,
  },
  optionColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  option: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 30,
    marginHorizontal: width * 0.02,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  selectedOption: {
    borderColor: COLORS.primary, // Color del borde cuando está seleccionado
    backgroundColor: COLORS.lightBlue, // Color de fondo cuando está seleccionado
  },
  subtitle: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 10,
    textAlign: "center",
  },
  icon: {
    width: width * 0.12,
    height: width * 0.12,
    marginBottom: 20,
  },
  optionText: {
    fontSize: width * 0.04,
    textAlign: "center",
    color: COLORS.black,
    marginHorizontal: 10,
  },
});

export default ShipmentMethodScreen;
