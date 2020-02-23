import React, { Component } from 'react'
import "./CheckoutPage.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default class CheckoutPage extends Component {
    render() {
        return (<>
            <div className="CheckoutPageContainer">
                <h1 className="CheckoutPageContainer__title">Checkout</h1>

                <div className="CheckoutPage-FormsContainer">

                    <div className="AddressFormContainer CheckoutPageFormContainer">
                        <h2 className="Form_title">Name & Adderss</h2>
                        <div className="AddressForm CheckoutPageForm">

                            <div className="form-InputContainer">
                                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            </div>
                            <div className="form-InputContainer">
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                            </div>

                            <div className="form-InputContainer">
                                <TextField id="outlined-basic" label="Contact Number" variant="outlined" />
                            </div>

                            <div className="spacer"></div>

                            <div className="form-InputContainer">
                                <TextField id="outlined-basic" label="City" variant="outlined" />
                            </div>

                            <div className="spacer"></div>

                            <div className="form-InputContainer fullrow">
                                <TextField id="textAreaInput" label="Address" variant="outlined" multiline rowsMax="8" rows="5" />
                            </div>


                        </div>

                    </div>



                    <div className="PaymentFormContainer CheckoutPageFormContainer">
                        <h2 className="Form_title">Payment Method</h2>
                        <div className="AddressForm CheckoutPageForm">

                            <div className="form-InputContainer Fullrow">
                                <RadioGroup aria-label="position" name="position" id="paymentRadioGroup" >
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="Cash on Delivery"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="Credit Card"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>

                                <TextField id="creditCardInput" label="Credit Card #" variant="outlined" />


                            </div>


                            <div className="spacer"></div>










                        </div>
                    </div>




                    <div className="ProceedToCheckout">
                        <h1 className="ProceedToCheckout__title">Grand Total <span className="ProceedToCheckout__TotalPricetxt">Rs 69000</span></h1>
                        <Button variant="outlined" color="primary">Proceed to Checkout</Button>
                    </div>



                </div>



            </div>

        </>
        )
    }
}
