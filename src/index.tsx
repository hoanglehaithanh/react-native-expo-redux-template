import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as Localization from "expo-localization";
import { i18n, Language, LocalizationKey } from "Localization";
import { NativeBaseProvider, Text } from "native-base";

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>{i18n.t(LocalizationKey.WELCOME)}</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
