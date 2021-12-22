import React from 'react';
import { Typography, Box, AppBar, Stack, Toolbar, CssBaseline, Container, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const Homepage = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Hello User
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Welcome !
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            “Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.” — Kevin Hart
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button href="/signin" variant="contained">Sign In</Button>
                                <Button href="/signup" variant="outlined">Sign Up</Button>
                            </Stack>
                        </Container>
                    </Box>
                </main>
            </ThemeProvider>
        </>
    );
}

export default Homepage;