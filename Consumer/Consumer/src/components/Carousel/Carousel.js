import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.scss"
import Slide1 from "../../assets/images/slide-1.jpg";
import Slide2 from "../../assets/images/slide-2.jpg";
import Slide3 from "../../assets/images/slide-3.jpg";

export default class BCarousel extends Component {
    render() {
        return (
            <div className="CarouselContainer" >
                <Carousel showThumbs={false} showStatus={false} width="100%" autoPlay infiniteLoop interval={3000} transitionTime={1000} >
                    <div>
                        <img src={Slide1} />

                    </div>
                    <div>
                        <img src={Slide2} />

                    </div>
                    <div>
                        <img src={Slide3} />

                    </div>

                </Carousel>
            </div>
        )
    }
}
