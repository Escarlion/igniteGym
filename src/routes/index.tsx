import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { gluestackUIConfig } from "@gluestack-ui/config";
import { Box } from "@gluestack-ui/themed";

import { useAuth } from "@hooks/useAuth";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { Loading } from "@components/Loading";

export function Routes() {

  const { user, isLoadingUserStorageData } = useAuth();
  
  const theme = DefaultTheme;
  //define uma cor de fundo padrão
  theme.colors.background = gluestackUIConfig.tokens.colors.trueGray900;

  if(isLoadingUserStorageData){
    return <Loading />
  }

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        { user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
