import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Link, TextField, CssBaseline, Avatar, Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const SignUp = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        age: "",
        number: "",
        gender: "",
    })

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, cpassword, age, number, gender } = userData;

        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, email, password, cpassword, age, number, gender
            })
        });

        const data = await response.json();

        if (response.status === 422 || !data) {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
        else {
            window.alert("SignUp Successful. Please LogIn");
            console.log("SignUp Successful. Please LogIn");

            navigate("/signin");
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
                            Sign up
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            <form method="POST">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            onChange={handleInputs}
                                            value={userData.firstName}
                                            type="text"
                                            id="firstName"
                                            label="First Name"
                                            name="firstName"
                                            autoComplete="off"
                                        // autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            onChange={handleInputs}
                                            value={userData.lastName}
                                            id="lastName"
                                            type="text"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="off"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            onChange={handleInputs}
                                            value={userData.email}
                                            id="email"
                                            type="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="off"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
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
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            onChange={handleInputs}
                                            value={userData.cpassword}
                                            name="cpassword"
                                            label="Confirm Password"
                                            type="password"
                                            id="cpassword"
                                            autoComplete="off"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            onChange={handleInputs}
                                            value={userData.age}
                                            id="age"
                                            label="Age"
                                            name="age"
                                            type="number"
                                            autoComplete="off"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Phone Number"
                                            onChange={handleInputs}
                                            value={userData.number}
                                            id="number"
                                            name="number"
                                            type="number"
                                            autoComplete="off"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="gender"
                                            label="Male"
                                            value="male"
                                            onChange={handleInputs}
                                            name="gender"
                                            autoComplete="off"
                                            type="radio"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="gender"
                                            label="Female"
                                            value="female"
                                            onChange={handleInputs}
                                            name="gender"
                                            autoComplete="off"
                                            type="radio"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    name="signup"
                                    id="signup"
                                    value="register"
                                    fullWidth
                                    variant="contained"
                                    onClick={postData}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                            </form>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/signin" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}


export default SignUp;