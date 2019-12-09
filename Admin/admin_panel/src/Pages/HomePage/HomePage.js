import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer,getRetailer } from '../../actions/Retailer/retailerAction'



class HomePage extends Component {


    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        // this.props.addRetailer({ name: "Usama" })
        this.props.getRetailer()
    }

    render() {

        console.log(this.props.retailer)

        var name = ""
        if (this.props.retailer.user.length > 0) {
            name = JSON.stringify(this.props.retailer.user[0]);
        }


        return (<>
            <h1>{name}</h1>
        </>);

    }
}



function mapStateToProps(store) {
    return {
        retailer: store,
    }
}

export default connect(mapStateToProps, { addRetailer,getRetailer })(HomePage);