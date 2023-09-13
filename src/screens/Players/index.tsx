import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
	const [team, setTeam] = useState("");
	const [players, setPlayers] = useState([""]);

	return (
		<Container>
			<Header showBackButton />

			<Highlight
				title="Nova turma"
				subtitle="Adicione a galera e separe os times"
			/>

			<Form>
				<Input placeholder="Olá" />
				<ButtonIcon icon="add" />
			</Form>

			<HeaderList>
				<FlatList
					data={["Time A", "Time B"]}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Filter
							title={item}
							isActive={item === team}
							onPress={() => setTeam(item)}
						/>
					)}
					ListEmptyComponent={() => (
						<ListEmpty message="Cadastre a primeira turma!" />
					)}
					showsVerticalScrollIndicator={false}
					horizontal
				/>
				<NumbersOfPlayers>{players}</NumbersOfPlayers>
			</HeaderList>

			<Button title="Remover Turma" type="secondary" />
		</Container>
	);
}
