import React, { useEffect } from 'react';
import { Typography, Box, AppBar, Stack, Toolbar, CssBaseline, Container, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Signout = () => {


    const navigate = useNavigate();
    const profilePage = async () => {
        try {
            const res = await fetch("/signout", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });

            const data = await res.json();

            if (!res.status === 200) {
                throw new Error("Invalid user");
            }
            else {
                navigate("/signout");
            }
        }
        catch (err) {
            console.log(err);
            navigate("/");
        }
    }

    useEffect(() => {
        profilePage();
    }, []);




    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Bubye !
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
                                Bye Bye !
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                Signout Successfull. !
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button href="/" variant="contained">Home</Button>
                            </Stack>
                        </Container>
                    </Box>
                </main>
            </ThemeProvider>
        </>
    );
}

export default Signout;