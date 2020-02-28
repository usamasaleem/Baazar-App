import React, { Component } from 'react';
import "./ProductTable.scss";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default class ProductTable extends Component {
    render() {
        return (
            <div className="ProductTable">

            <div className="ProductTable-columns">
            <p className="ProductTable__column">Name</p>
            <p className="ProductTable__column">ID</p>
            <p className="ProductTable__column">Price</p>
            <p className="ProductTable__column">Quantity</p>
            <p className="ProductTable__column">Total   </p>
            <DeleteForeverIcon className="ProductTable__column"/>
            </div>


            </div>
        )
    }
}
