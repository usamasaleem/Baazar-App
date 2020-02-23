import React, { Component } from 'react'
import "./ProductDetailPage.scss";
import BCarousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    button: {
        background: '#3F51B5',
        margin: "1rem",
        marginLeft: "0"
    },
    rating: {
        margin: 0
    }
};


class ProductDetailPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <div className="ProductDetail">

                    <div className="ProductDetail-MainSection   ProductDetail-Section">

                        <div className="ProductDetail-carouselContainer">
                            <BCarousel />
                        </div>

                        <div className="ProductDetail-productInfoContainer">
                            <h2 className="ProductDetail_productTitle"> Product Title TextProduct Title TextProduct Title Text</h2>
                            <Rating
                                name="read-only"
                                value={3}
                                readOnly
                            />
                            <h1 className="ProductDetail_productPrice">Rs 1,500</h1>
                            <p className="ProductDetail_productExtraInfo">Lorem ipsum is a placeholder text commonly used to demonstrate the visual </p>

                            <div className="ProductDetail_productBtnContainer">
                                <Button variant="contained" color="primary" className={classes.button}>Add to Cart</Button>
                                <Button variant="contained" color="primary" className={classes.button}>Blur Text</Button>
                            </div>

                        </div>





                    </div>

                    <div className="ProductDetail-DetailsSection   ProductDetail-Section">
                        <h1 className="DetailsSection__title ProductDetail__sectionTitle">Product Details</h1>
                        <div className="Details-container"></div>
                    </div>

                    <div className="ProductDetail-RatingSection  ProductDetail-Section">
                        <h1 className="RatingSection__title  ProductDetail__sectionTitle">Ratings</h1>

                        <div className="ProductDetail-Ratings">

                            <div className="ProdutDetail-AvgRatingContainer">
                                <h1 className="ProductDetail__AvgRating">5.0<span className="totalRatingNum">/5</span></h1>
                                <Rating
                                    name="read-only"
                                    value={3}
                                    readOnly
                                    className={classes.rating}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="ProductDetail-RelatedProductSection ProductDetail-Section">
                        <h1 className="RelatedProductSection__title  ProductDetail__sectionTitle">Related Products</h1>
                        <div className="HorizontalScroller">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        </div>
                    </div>


                </div>

            </>
        )
    }
}


ProductDetailPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductDetailPage);