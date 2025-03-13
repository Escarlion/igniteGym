import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { gluestackUIConfig } from "@gluestack-ui/config";
import { Box } from "@gluestack-ui/themed";

import { useAuth } from "@hooks/useAuth";

import { AuthRoutes } from "./auth.routes";
import { useContext } from "react";

export function Routes() {

  const { user } = useAuth();
  
  const theme = DefaultTheme;
  //define uma cor de fundo padrão
  theme.colors.background = gluestackUIConfig.tokens.colors.trueGray900;

  console.log("User: ", user)

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
