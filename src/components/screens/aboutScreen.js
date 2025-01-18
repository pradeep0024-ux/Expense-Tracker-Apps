import React from "react";
import { View, Text, Linking } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const AboutScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        top: 50,
      }}
    >
      <Card containerStyle={{ borderRadius: 6 }}>
        <Card.Title>Expense Tracker</Card.Title>
        <Card.Divider />

        <Text style={{ marginBottom: 10, width: 280, alignSelf: "center" }}>
          This Project is created using React Native, React Hooks, Context API,
          React Navigation, React Element.
        </Text>
        
      </Card>
    </View>
  );
};

export default AboutScreen;