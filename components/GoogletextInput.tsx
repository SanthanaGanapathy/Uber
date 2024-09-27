import { View, Text } from "react-native";
import { GoogleInputProps } from "@/types/type";

const GoogletextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    <Text>Search</Text>
  </View>
);

export default GoogletextInput;
