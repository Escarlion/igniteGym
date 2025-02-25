import { Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronRight } from "lucide-react-native"

type Props = TouchableOpacityProps & {
  
};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{ uri: "https://i.redd.it/4ajm8xvg20w61.jpg" }}
          alt="Imagem do exercicio"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Bizarre adventures
          </Heading>
          <Text
            fontSize="$sm"
            color="$gray200"
            fontFamily="$body"
            mt="$1"
            numberOfLines={2}
          >
            5 temporadas
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
