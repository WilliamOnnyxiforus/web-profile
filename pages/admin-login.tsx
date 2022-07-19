import type { NextPage } from 'next'

// @mui material components
import {Card, Grid, TextField, Button} from "@mui/material";

//Components
import Footer from '../components/layouts/Footer';

//css
import classes from "../public/css/admin-login.module.css"

const AdminLogin: NextPage = () => {
    return(
        <div id={classes.loginContainer}>
            <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
                <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
                    <Card id={classes.loginCard}>
                        <div id={classes.loginLabel}>
                            <h4 id={classes.signInText}>Sign in</h4>
                        </div>
                        <form id={classes.loginForm}>
                            <TextField fullWidth label="Email" id="email" margin="normal" />
                            <TextField fullWidth label="Password" id="password" margin="normal" />
                            <Button variant="contained">SIGN IN</Button>
                        </form>
                    </Card>
                </Grid>
            </Grid>
            
            <Footer />
        </div>
    );
}

export default AdminLogin