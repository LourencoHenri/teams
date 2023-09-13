import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyledProps = "primary" | "secondary";

type Props = {
	type: ButtonIconTypeStyledProps;
};

export const Container = styled(TouchableOpacity)<Props>`
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	margin-left: 12px;
	max-height: 56px;
	min-width: 56px;
	flex: 1;

	background-color: ${({ theme, type }) =>
		type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
	size: 24,
	color: type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
}))``;
