import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { gluestackUIConfig } from "@gluestack-ui/config";
import { Box } from "@gluestack-ui/themed";

export function Routes(){
    const theme = DefaultTheme
    //define uma cor de fundo padrão
    theme.colors.background = gluestackUIConfig.tokens.colors.trueGray900;

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
            <AppRoutes />
        </NavigationContainer>
        </Box>
        
    );
}