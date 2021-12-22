import * as React from 'react';
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Link, TextField, CssBaseline, Avatar, Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const SignIn = () => {
   
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const { email, password} = userData;

        const response = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password 
            })
        });

        const data = await response.json();

        if (response.status === 400 || !data) {
            window.alert("Please SignUp first");
            console.log("Please SignUp first");
            navigate("/signup");
        }
        else {
            window.alert("SignIn Successful.");
            console.log("SignIn Successful.");
            navigate("/profile");
        }
    }


    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form method="POST">
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleInputs}
                                value={userData.email}
                                type="email"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="off"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleInputs}
                                value={userData.password}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="off"
                            />
                            <Button
                                type="submit"
                                name="signin"
                                onClick={postData}
                                id="signin"
                                value="Log In"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default SignIn;