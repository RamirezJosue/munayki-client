import React, { useMemo } from 'react';
import palette from './palette';
import shape from './shape';
import typography from './typography';
import shadows, { customShadows } from './shadows';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import ComponentsOverrides from './overrides';
import { CssBaseline } from '@mui/material';

const ThemeConfig = ({ children }) => {

    const themeOptions = useMemo(
        () => ({
            palette,
            shape,
            typography,
            shadows,
            customShadows
        }), []
    );

    const theme = createTheme(themeOptions);
    theme.components = ComponentsOverrides(theme);

    return (
        <StyledEngineProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeConfig;
