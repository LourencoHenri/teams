import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyledProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	type?: ButtonTypeStyledProps;
};

export function Button({ title, type = "primary", ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			<Title>{title}</Title>
		</Container>
	);
}
