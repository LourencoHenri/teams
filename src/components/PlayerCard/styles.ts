import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_500};
	align-items: center;
	flex-direction: row;
	margin-bottom: 16px;
	border-bottom: 6px;
	height: 56px;
	width: 100%;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	color: ${({ theme }) => theme.COLORS.GRAY_200};
	flex: 1;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.GRAY_200,
}))`
	margin-left: 16px;
	margin-right: 4px;
`;

/* export const Container = styled(TouchableOpacity)<Props>`
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	margin-left: 12px;
	max-height: 56px;
	min-width: 56px;
	flex: 1; */

// 	background-color: ${({ theme, type }) =>
// 		type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
// `;

// export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
// 	size: 24,
// 	color: type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
// }))``;
