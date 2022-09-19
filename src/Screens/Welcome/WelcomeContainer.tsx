import React from "react";
import { Welcome } from "./Welcome";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WELCOME
>;

export const WelcomeContainer = ({
  navigation,
}: WelcomeScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Welcome onNavigate={onNavigate} />;
};
