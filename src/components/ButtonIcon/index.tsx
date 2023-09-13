import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconTypeStyledProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
	icon: keyof typeof MaterialIcons.glyphMap;
	type?: ButtonIconTypeStyledProps;
};

export function ButtonIcon({ icon, type = "primary", ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			<Icon name={icon} color={type} size={32} />
		</Container>
	);
}
