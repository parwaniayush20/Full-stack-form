import React from "react";
import { useState, useEffect } from "react";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
import { Typography, AppBar, Toolbar, Box, Link, CssBaseline, Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    const profilePage = async () => {
        try {
            const res = await fetch("/profile", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });

            const data = await res.json();
            setUserData(data);
            console.log(data);

            if (!res.status === 200) {
                throw new Error("Invalid user");
            }
            else {
                navigate("/profile");
            }
        }
        catch (err) {
            console.log(err);
            navigate("/signin");
        }
    }

    useEffect(() => {
        profilePage();
    }, []);


    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        Hello {userData.firstName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <br />
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    You've been successfully signed up, look forwards to lots of awesome content.
                    This is what we received from you.
                </Typography>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                    First Name: {userData.firstName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                    Last Name: {userData.lastName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                    Email: {userData.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                    Age: {userData.age}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                    Gender: {userData.gender}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                    Mobile Number: {userData.number}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            value="register"
                            href="/signout"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Out
                        </Button>
                    </Box>
                </Container>
            </Container>
        </>
    )
}


export default Profile;