import React from 'react';


import styled from 'styled-components'
function HowItWorks() {
    return (

        <div class="section-2">
            <Container class="container w-container">
                <Sectionheding class="section-heding">How it works</Sectionheding>
                <HIWW class="how-it-works-wrap">
                    <HIWcard class="how-it-works-card">
                        <LottieAnimation data-w-id="7734c54d-a957-6722-9619-46ac73cdd4ed" data-animation-type="lottie" data-src="documents/lottieflow-ecommerce-14-15-000000-easey.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.15" data-duration="1.3" class="lottie-animation"></LottieAnimation>
                        <HIWheading class="how-it-works-heading">Buy local online</HIWheading>
                        <HIWdescription class="how-it-works-description">Your local retail stores made <br />available online</HIWdescription>
                    </HIWcard>
                    <HIWcard class="how-it-works-card">
                        <LottieAnimation data-w-id="7ed876bd-e84f-2de2-df47-37a10e51cd0e" data-animation-type="lottie" data-src="documents/lottieflow-ecommerce-14-19-000000-easey.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="3.95" data-duration="0" class="lottie-animation"></LottieAnimation>
                        <HIWheading class="how-it-works-heading">Fast Delivery</HIWheading>
                        <HIWdescription class="how-it-works-description">Get your orders delivered in 3 hours of ordering</HIWdescription>
                    </HIWcard>
                    <HIWcard class="how-it-works-card">
                        <LottieAnimationPayment data-w-id="f9e6f8a2-e0d2-08db-17e1-c4af95a439e1" data-animation-type="lottie" data-src="documents/lottieflow-ecommerce-14-20-000000-easey.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.9833333333333334" data-duration="0" class="lottie-animation payment"></LottieAnimationPayment>
                        <HIWheading class="how-it-works-heading">Flexible Payment</HIWheading>
                        <HIWdescription class="how-it-works-description">Pay online via credit or debit card. Or using cash on delivery </HIWdescription>
                    </HIWcard>
                </HIWW>
            </Container>
        </div>
    );
}

export default HowItWorks;

const Container=styled.div `
    max-width: 1100px;
    padding: 20px;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  `
  const Sectionheding =styled.div`
  
  margin-top: 0px;
  margin-bottom: 40px;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`
const HIWW= styled.div`
    display: -ms-grid;
    display: grid;
    justify-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-content: end;
    -ms-flex-line-pack: end;
    align-content: end;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  `

  const HIWheading =styled.div`
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #1a1a1a;
    font-size: 1.2em;
    font-weight: 500;
    text-align: center;
  `
  
  const HIWcard = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 350px;
    max-width: 230px;
    padding: 27px 17px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.08);
  `
  
  const HIWdescription =styled.div`
    margin-top: 27px;
    padding-right: 5px;
    padding-left: 5px;
    color: #868383;
    font-size: 1rem;
    line-height: 1.56rem;
    text-align: center;
  `
  const LottieAnimation =styled.div`
  width: 120px;
  height: 120px;
`

const LottieAnimationPayment =styled.div`
width: 120px;
  height: 120px;
  padding-right: 25px;
  padding-left: 25px;
`