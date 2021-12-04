import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Stack,Container, Typography } from '@mui/material';
import { Page } from '../components/Page';
import { MHidden } from '../components/@material-extend/MHidden';
import { LoginForm } from '../components/authentication/LoginForm';

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

export const Login = () => {
    return (
        <RootStyle title="Proyecto educativo">
            <MHidden width="mdDown">
                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Hola, Bienvenido de nuevo
                    </Typography>
                    <img src="/static/illustrations/illustration_login.png" alt="login" />
                </SectionStyle>
            </MHidden>
            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Proyecto educativo
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Ingrese sus datos a continuación.</Typography>
                    </Stack>
                    <LoginForm />
                </ContentStyle>
            </Container>
        </RootStyle>

    )
}