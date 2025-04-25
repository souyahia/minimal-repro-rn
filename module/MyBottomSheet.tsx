import { BottomSheetModal, BottomSheetModalProps, BottomSheetView } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MyBottomSheetBackdrop } from "./MyBottomSheetBackdrop";

const MAX_BOTTOM_SHEET_HEIGHT_RATIO = 0.8;

type Props = Omit<BottomSheetModalProps, "children">

const MyBottomSheetComponent = (props: Props, ref: ForwardedRef<BottomSheetModal>) => {
  const { height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  return (
    <BottomSheetModal
      ref={ref}
      enableDynamicSizing
      enablePanDownToClose
      maxDynamicContentSize={height * MAX_BOTTOM_SHEET_HEIGHT_RATIO}
      backdropComponent={MyBottomSheetBackdrop}
      {...props}
    >
      <BottomSheetView style={styles.container}>
        <Text>Hello World</Text>
        <View style={{ height: bottom }} />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export const MyBottomSheet = forwardRef(MyBottomSheetComponent);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
});
