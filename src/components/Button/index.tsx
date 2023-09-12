import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyledProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	type?: ButtonTypeStyledProps;
};

export function ListEmpty({ title, type = "primary", ...rest }: Props) {
	return (
		<Container {...rest}>
			<Title>Henrique</Title>
		</Container>
	);
}
