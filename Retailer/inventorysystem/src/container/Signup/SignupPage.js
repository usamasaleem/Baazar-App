import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

    extendedIcon: {
        width: "100%"
    },
}));



function SignupPage() {

    const classes = useStyles();


    return (

        <div>


            <Container maxWidth="sm">
                <form noValidate autoComplete="off" style={{ marginTop: "5rem" }}>
                    <h1>Retailer Form</h1>

                    <Grid container spacing={2}
                        justify="start"
                    >


                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="City" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Mobile No" variant="outlined" fullWidth />
                        </Grid>


                        <Grid item xs={12}>
                        <Button className={classes.extendedIcon} variant="contained"  color="primary" size="large">Sign up</Button>
                        </Grid>



                    </Grid>
                </form>
            </Container>

        </div>
    );


}




export default SignupPage;
