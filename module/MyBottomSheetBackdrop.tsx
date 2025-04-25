import { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

export const MyBottomSheetBackdrop = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      opacity={0.5}
      pressBehavior="close"
      {...props}
    />
  );
};
