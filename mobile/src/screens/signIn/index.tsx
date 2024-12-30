import { ImageBackground, Text } from "react-native";

import backgroundImg from "../../assets/background.png"

import { Button } from "../../components/button";

export function SignIn() {
  return (
    <ImageBackground source={backgroundImg} className="flex-1 justify-center items-center p-[52] bg-GRAY_800">
      <Text className="text-BRAND_LIGHT text-XXL font-BOLD text-center">Ignite Fleet</Text>
      <Text className="text-GRAY_100 text-MD font-REGULAR text-center mb-[32]">Gestão de uso de veículos</Text>

      <Button title="Entrar com Google"/>
    </ImageBackground>
  );
}

