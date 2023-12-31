import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyledProps = "primary" | "secondary";

type Props = {
	type: ButtonTypeStyledProps;
};

export const Container = styled(TouchableOpacity)<Props>`
	flex: 1;
	min-width: 56px;
	max-height: 56px;
	border-radius: 6px;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme, type }) =>
		type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.WHITE};
`;
