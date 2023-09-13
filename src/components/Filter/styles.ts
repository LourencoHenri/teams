import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStyleProps = {
	isActive: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
	border-radius: 4px;
	margin-right: 12px;

	height: 38px;
	width: 70px;

	align-items: center;
	justify-content: center;

	border: ${({ theme, isActive }) =>
		isActive === true && theme.COLORS.GREEN_700};
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	text-transform: uppercase;
`;
