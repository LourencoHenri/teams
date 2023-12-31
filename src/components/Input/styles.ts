import styled from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled(TextInput)`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	border-radius: 6px;
	min-height: 56px;
	max-height: 56px;
	padding: 16px;
	flex: 1;
`;
