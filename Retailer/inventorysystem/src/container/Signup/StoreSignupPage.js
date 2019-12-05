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



function StoreSignupPage() {

    const classes = useStyles();

    const [message, setMessage] = React.useState("");
    const [formsent, setformsent] = React.useState(false);
    const [fomrData,setformData] = React.useState({
        Name:"",
        Description:"",
        Address:"",
        Name:"",

    })

    return (

        <div>


            <Container maxWidth="sm">
                <form noValidate autoComplete="off" style={{ marginTop: "5rem" }}>
                    <h1>Add a Store</h1>

                    <Grid container spacing={2}
                        justify="start"
                    >


                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth error  helperText="Incorrect entry." />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth multiline rows="4" />
                        </Grid>

                        <Grid item xs={12}>
                            <Button className={classes.extendedIcon} variant="contained" color="primary" size="large" onClick={() => {
                                setMessage("Response has beed submitted")
                                setformsent(true)
                            }}>Submit</Button>
                        </Grid>

                        <Grid item xs={12}>
                            {formsent &&
                                <p style={{color:"green"}}>{message}</p>
                                
                            }

                            {!formsent &&
                                <p style={{color:"red"}}>{message}</p>
                            }

                        </Grid>



                    </Grid>
                </form>
            </Container>

        </div>
    );


}




export default StoreSignupPage;
