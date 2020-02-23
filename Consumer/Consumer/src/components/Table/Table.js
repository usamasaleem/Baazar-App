import React, { Component } from 'react'
import "./Table.scss";
import Img from "../../assets/images/slide-2.jpg";

export default class Table extends Component {
    render() {
        return (
            <>
                <div className="ProductsTable">
                    <div className="ProductsTable-TableHeader">
                        <div className="TableBody__item">
                            <p className="TableHeader__txt"></p>
                        </div>
                        <div className="TableBody__item">
                            <p className="TableHeader__txt"></p>
                        </div>
                        <div className="TableBody__item">
                        <p className="TableHeader__txt">Product ID</p>
                        </div>
                        <div className="TableBody__item">
                        <p className="TableHeader__txt">Unit Price</p>
                        </div>
                        <div className="TableBody__item">
                        <p className="TableHeader__txt">Quantity</p>
                        </div>
                        <div className="TableBody__item">
                        <p className="TableHeader__txt">Total</p>
                        </div>

                    </div>
                    <div className="ProductsTable-TableBody">

                      <div className="ProductTable-ListCard">
                            <div className="TableBody__item">
                                <img className="ListCard__img" src={Img} />
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Full Name</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">001</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt ListCard__Price">Rs 1.20</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt"><i class="fas fa-plus ListCard__Icon"/> {'\u00A0'}{'\u00A0'}1{'\u00A0'}{'\u00A0'}<i class="fas fa-minus ListCard__Icon"/></p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Rs 1.20</p>
                            </div>

                        </div>
                      <div className="ProductTable-ListCard">
                            <div className="TableBody__item">
                                <img className="ListCard__img" src={Img} />
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Full Name</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">001</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt ListCard__Price">Rs 1.20</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt"><i class="fas fa-plus ListCard__Icon"/> {'\u00A0'}{'\u00A0'}1{'\u00A0'}{'\u00A0'}<i class="fas fa-minus ListCard__Icon"/></p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Rs 1.20</p>
                            </div>

                        </div>
                      <div className="ProductTable-ListCard">
                            <div className="TableBody__item">
                                <img className="ListCard__img" src={Img} />
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Full Name</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">001</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt ListCard__Price">Rs 1.20</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt"><i class="fas fa-plus ListCard__Icon"/> {'\u00A0'}{'\u00A0'}1{'\u00A0'}{'\u00A0'}<i class="fas fa-minus ListCard__Icon"/></p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Rs 1.20</p>
                            </div>

                        </div>
                      <div className="ProductTable-ListCard">
                            <div className="TableBody__item">
                                <img className="ListCard__img" src={Img} />
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Full Name</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">001</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt ListCard__Price">Rs 1.20</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt"><i class="fas fa-plus ListCard__Icon"/> {'\u00A0'}{'\u00A0'}1{'\u00A0'}{'\u00A0'}<i class="fas fa-minus ListCard__Icon"/></p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Rs 1.20</p>
                            </div>

                        </div>
                      <div className="ProductTable-ListCard">
                            <div className="TableBody__item">
                                <img className="ListCard__img" src={Img} />
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Full Name</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">001</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt ListCard__Price">Rs 1.20</p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt"><i class="fas fa-plus ListCard__Icon"/> {'\u00A0'}{'\u00A0'}1{'\u00A0'}{'\u00A0'}<i class="fas fa-minus ListCard__Icon"/></p>
                            </div>
                            <div className="TableBody__item">
                                <p className="ListCard__txt">Rs 1.20</p>
                            </div>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}
