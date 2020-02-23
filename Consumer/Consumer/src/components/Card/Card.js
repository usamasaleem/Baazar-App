import React, { Component } from 'react'
import "./Card.scss";
import ExpandedCard from "../ExpandedCard/ExpandedCard";
import Img from "../../assets/images/slide-1.jpg";
import { Icon } from '@material-ui/core';
export default class Card extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.detailCard)
            return (
                <>
                    <div className="Card">

                        <img src={Img} className="Card__img" />

                        <div className="Card-content">
                            <p className="Card__description">lprem lprem lprem lprem lprem  lprem lpremlprem lprem lprem lprem lprem lprem  lprem lpremlprem</p>
                        </div>

                    </div>
                </>
            )

        else if(this.props.categoryCard){
            return (
                <>
                <div className="CateogryCard">
                
                <div className="CateogryCard-imgContainer">
                <img className="CateogryCard__img" src={Img}/>
                </div>

                <div className="CategoryCard-infoContainer">
                <p className="CategoryCard__infoTxt CategoryCard__nameTxt">Name</p>
                <p className="CategoryCard__infoTxt CategoryCard__priceTxt">Price</p>
                </div>

                </div>
                </>
            )
        }


        else 
            return (
                <>
                    <div className="Card Card-simpleContainer">

                        <img src={Img} className="Card__img" />

                       

                    </div>
                </>
            )
        




    }



}
