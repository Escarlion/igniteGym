import { VStack, Image } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando" // texto que aparece caso a img nn carregue
        w="$full" //largura ocupa todo o espaço disponivel
        h={624}
      />
    </VStack>
  );
}
