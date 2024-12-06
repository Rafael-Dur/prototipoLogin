import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InternalHeader from "../components/InternalHeader";
import { COLORS } from "../constants/constants";
//import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../components/ProgressBar";
import { updateShipmentField } from "../features/Shipments/ShipmentSlice";


const ShipmentForm1 = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        nombre: "",
        cedula: "",
        direccion: "",
        pais: "",
        codigoPostal: "",
        barrio: "",
        telefono: "+59897679522",
        ciudad: "",
    });

    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

    const validateCedula = (CI) => /^[0-9]{6,8}$/.test(CI);

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleValidation = () => {
        const { nombre, cedula, direccion, pais, codigoPostal, barrio, ciudad } = formData;

        if (!nombre.trim()) return alert("El nombre es obligatorio.");
        if (!validateCedula(cedula)) return alert("La cédula debe ser válida.");
        if (!direccion.trim()) return alert("La dirección es obligatoria.");
        if (!pais.trim()) return alert("El país es obligatorio.");
        if (!codigoPostal.trim()) return alert("El código postal es obligatorio.");
        if (!barrio.trim()) return alert("El barrio es obligatorio.");
        if (!ciudad.trim()) return alert("La ciudad es obligatoria.");
      //  if (!formattedPhoneNumber.trim()) return alert("El teléfono debe ser válido.");

        navigation.navigate("ShipmentForm2");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <InternalHeader showBackButton={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.subheaderText}>¿Quién envía?</Text>
                <Text style={styles.subheaderTextSecondary}>
                    Completa los datos de remitente
                </Text>
                <ProgressBar currentStep={1} />

                {/* Campos del formulario */}
                {[
                    { label: "Nombre", key: "nombre" },
                    { label: "Cédula", key: "cedula" },
                    { label: "Dirección", key: "direccion" },
                    { label: "País", key: "pais" },
                    { label: "Código Postal", key: "codigoPostal" },
                    { label: "Barrio", key: "barrio" },
                    { label: "Ciudad", key: "ciudad" },
                ].map(({ label, key }, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{label}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`Ingresa ${label.toLowerCase()}`}
                            value={formData[key]}
                            onChangeText={(value) => handleInputChange(key, value)}
                        />
                    </View>
                ))}

                {/* Teléfono con formato internacional */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Teléfono</Text>
                   {/* Teléfono con formato internacional 
                    <PhoneInput
                        defaultCode="UY"
                        layout="first"
                        onChangeFormattedText={setFormattedPhoneNumber}
                        containerStyle={styles.phoneInputContainer}
                        textContainerStyle={styles.phoneInputTextContainer}
                        flagButtonStyle={styles.flagButton}
                    />
                    */}
                </View>

                {/* Botones: Atrás y Siguiente */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.backButton]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>Atrás</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleValidation}>
                        <Text style={styles.buttonText}>Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    subheaderText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    subheaderTextSecondary: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.greenBright2,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 10,
    },
    phoneInputContainer: {
        borderColor: COLORS.greenBright2,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        height: 50,
        justifyContent: "center",
        width: "100%",
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    button: {
        flex: 0.48,
        backgroundColor: COLORS.red,
        padding: 15,
        alignItems: "center",
        borderRadius: 8,
    },
    backButton: {
        backgroundColor: COLORS.white,
        borderWidth: 3,
        borderColor: COLORS.red,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    backButtonText: {
        color: COLORS.red,
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ShipmentForm1;