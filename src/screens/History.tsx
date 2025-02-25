import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { SectionList } from "react-native";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "24.02.2025",
      data: ["Pux", "renas"],
    },
    {
      title: "25.02.2025",
      data: ["Pux"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Historico" />

      <SectionList /// cria uma sesão
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$10"
            mb="$3"
          >
            {section.title}{" "}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="$gray100" textAlign="center">
            {" "}
            Sem exercícios registrados.{" "}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
