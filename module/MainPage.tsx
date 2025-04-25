import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import { MyBottomSheet } from "./MyBottomSheet";

export const MainPage = () => {
  const ref = useRef<BottomSheetModal | null>(null);

  return (
    <View style={styles.container}>
      <Button title="Open Sheet" onPress={() => ref.current?.present()} />
      <MyBottomSheet ref={ref} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
  },
});