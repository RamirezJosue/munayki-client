import React from 'react';
import { Container, Typography } from '@mui/material';
import { Page } from '../components/Page';
import { Box } from '@mui/system';


export const DashboardApp = () => {
    return (
        <Page title="Principal | Proyecto educativo">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Hola,Bienvenido de nuevo</Typography>
                </Box>
            </Container>
        </Page>
    )
}
