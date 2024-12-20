import React from "react";
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import BodyContainer from "../components/BodyContainer";
import { COLORS } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateShipmentField } from "../features/Shipments/ShipmentSlice";
import InternalHeader from "../components/InternalHeader";
import { ShipmentPackageType } from "../constants/enums";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

// Importar imágenes locales
import FamilyPresentsImage from "../assets/images/Servicio_3.png";
import BooksImage from "../assets/images/Servicio_1.png";
import ClothesImage from "../assets/images/Servicio_2.png";


export default function ServiceSelection({ navigation }) {
  const dispatch = useDispatch();

  const services = [
    {
      title: "Regalos Familiares",
      description:
        "Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Sed faucibus turpis in eu mi bibendum. Amet consectetur adipiscing elit pellentesque habitant morbi tristique.",
      image: FamilyPresentsImage,
      packageType: ShipmentPackageType.FamilyPresents,
    },
    {
      title: "Libros",
      description:
        "Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Sed faucibus turpis in eu mi bibendum. Amet consectetur adipiscing elit pellentesque habitant morbi tristique.",
      image: BooksImage,
      packageType: ShipmentPackageType.Books,
    },
    {
      title: "Ropa",
      description:
        "Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Sed faucibus turpis in eu mi bibendum. Amet consectetur adipiscing elit pellentesque habitant morbi tristique.",
      image: ClothesImage,
      packageType: ShipmentPackageType.Clothes,
    },
  ];

  const handleStore = (type) => {
    dispatch(updateShipmentField({ key: "shipmentPackageType", value: type }));
  };

  const handleCardPress = (type) => {
    handleStore(type);
    navigation.navigate("ShipmentMethodScreen");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <InternalHeader showBackButton={true} />
        <BodyContainer isGrayBackground={true}>
          <Text style={styles.headerText}>Comenzar envío</Text>
          {services.map((service, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Image source={service.image} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardDescription}>{service.description}</Text>
                <View style={styles.button}>
                  <Button
                    onPress={() => handleCardPress(service.packageType)}
                    title={"Comenzar"}>
                  </Button>
                </View>

              </View>
            </View>
          ))}
          <Text style={styles.footerText}>
            ¿Problemas? <Text style={styles.footerLink}>Contáctanos</Text>
          </Text>
        </BodyContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    backgroundColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    flexGrow: 1,
  },
  button: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    flexGrow: 1,
  },
  headerText: {
    fontFamily: "Delivery", // Fuente personalizada
    fontSize: 24,
    color: COLORS.black,
    marginVertical: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    width: "90%",
    alignSelf: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "center",
  },
  cardTitle: {
    fontFamily: "Delivery", // Fuente personalizada
    fontSize: 18,
    color: COLORS.black,
    marginBottom: 10,
  },
  cardDescription: {
    fontFamily: "Delivery2", // Fuente secundaria
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: COLORS.red,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Delivery", // Fuente personalizada
    color: COLORS.white,
    fontSize: 16,
  },
  footerText: {
    fontFamily: "Delivery2", // Fuente secundaria
    fontSize: 14,
    color: COLORS.black,
    textAlign: "center",
    marginTop: 20,
  },
  footerLink: {
    fontFamily: "Delivery", // Fuente personalizada
    color: COLORS.red,
  },
});
