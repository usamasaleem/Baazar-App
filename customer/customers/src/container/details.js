import React, { Component } from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar'
import StarRatings from 'react-star-ratings';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Navbar from '../components/Navbar/navbar'
import Cards from '../components/relatedCards/related'
import Footer from '../components/Footer/Footer'
import {get,post} from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
// import ReactStars from 'react-rating-stars-component'
// const ratingChanged = (newRating) => {
//     console.log(newRating)
//   }
class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            store:[],
            isAdded:false,
            qty:1,
            
          }
          this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.getProducts();

        this.getProducts().then((response)=>{
            
            this.setState({
              data:response.data,
              store:response.data.stores
            });
            console.log(this.state.store)
           
          });
        

        let hours = 1
        let saved = localStorage.getItem('UserTime')
        if (saved && (new Date().getTime() - saved > hours * 60*60 * 1000)) {
            this.setState({
                timeout:true
            })
        localStorage.clear()
        }
        
      }

      getProducts(){
        const id=this.props.match.params.id;
        const url = 'http://localhost:4000/product/'+id;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }
 
    // addToCard = event => {
        addToCart(id) {
            console.log(id);
            this.setState({
                isAdded:true
              });
    
              const carts={
                  addedToCart:true,
                  quantity:this.state.qty,
                  products:id,
                  userID:reactLocalStorage.get('UserID')
              }
    
              const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            post(`http://localhost:4000/shoppingCart/add`, carts ,config)
              .then(res => {
                console.log(res);
                console.log(res.data);
              })
              console.log(carts);
          }
    render() {

        // if (!reactLocalStorage.get('login')) {
        //     return <Redirect to='/login'/>;
        //   }
        return (

            <Section>
                    <Navbar />
                    <MainContainer>
                        <ProductsDetails>
                            <ItemImage src={ `/uploads/${this.state.data.fileName}`} >

                            </ItemImage>

                            <ItemDetails>
                                <TopDescription>
                                <ItemHeading>{this.state.data.name}</ItemHeading>
                                <Rating>
                                {/* <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        color1={'yellow'}
                                        color2={'#ffd700'} /> */}
                                        <StarRatings
                                        rating={2}
                                        starRatedColor="#ffd700"
                                        changeRating={this.changeRating}
                                        numberOfStars={5}
                                        starDimension="25px"
                                        starSpacing="2px"
                                        name='rating'
                                        />
                                             </Rating>
                                <Price>Rs. {this.state.data.Seller_price}</Price>

                                </TopDescription>
                                
                                <BottomDescription>
                               
                                    <DetailHeading>
                                            Details
                                            
                                        <Border></Border>
                                        <DetailHeading>
                                            Store: {this.state.store.name}
                                        
                                    </DetailHeading>
                                    </DetailHeading>
                                  <Text>{this.state.data.details}</Text>
                                 
                                  {this.state.isAdded &&
                     <Added  disabled>
                     Added
                    </Added>   }
                    {!this.state.isAdded &&
                     <Button onClick={() => this.addToCart(this.state.data._id)}>Add to Cart</Button>
    }
                                    <Quantity placeholder="1" type='number' value={this.state.qty} name="quantity" onChange={e => this.setState({qty:e.target.value})}></Quantity>

                                </BottomDescription>

                            </ItemDetails>

                        </ProductsDetails>

                        <RelatedProducts>
                        <Title>Related Porducts</Title>

                        <CardContainer>
                                            <Cards/>
                                            <Cards/>
                                            <Cards/>
                                            <Cards/>      
                       </CardContainer>
                                        
                 
                        </RelatedProducts>
                      
                    </MainContainer>
                    <Footer></Footer>
            </Section>
            

        )
    }}

    const Section=styled.section
    `
    width:100%;
    display: block;
    height:100%;
    overflow:hidden;
    `
    const MainContainer=styled.div
    `
    width:100%;
    // background-color:black;
    height:70%;

    `
    const Quantity=styled.input`
    width:50px;
    margin-left:50px;
    height:20px;
    `
    const Text=styled.p
    `
   padding:0;
   margin:0;
   text-align: justify;
   color:#787878 ;
   line-break: anywhere;
   font-family: Poppins
    `
    const Title=styled.p
    `
   padding:0;
   margin:0;
   text-align: justify;
   color:#343847 ;
   margin-left:10%;
   font-family: Poppins;
   font-size:24px;
   font-weight:600;
   margin-top:10px;
    `
    
    const ProductsDetails=styled.div`
    width:100%;
    height:50%;
    // background-color:blue;
    display:inline-flex;
    flex-direction:row;
    `
    const RelatedProducts=styled.div
    `
  height:50%;
    width:100%;
    // flex-wrap:wrap;
    // align-items:flex-start;
    // justify-content:center;
    overflow:hidden;
    padding-bottom:20px;
    margin-bottom:20px;
    `

    const ItemImage=styled.img`
    width:20%;
    height:70%;
    margin:auto;
    `
    const TopDescription=styled.div`
display:block;
height:20%
    `

    const ItemDetails=styled.div`
    width:60%;
    height:100%;
    margin-top:6%;
    text-align:start;
    `
    const ItemHeading =styled.p`
    font-size:24px;
    font-famiy:"Poppins";
    font-weight:bold;
    padding:0;
    margin:0;
    `
    const Rating=styled.div`
    padding:5px;
    `

    const Price=styled.p`
    font-size:24px;
    font-famiy:"Poppins";
    font-weight:bold;
    padding:0;
    margin:0;
    `
    const BottomDescription=styled.div`
    height:40%;
    width:50%;
    `
    const DetailHeading=styled.p`
    font-family:"Poppins";
    font-size:18px;
    `
    const Border=styled.div`
    border:1px solid #787878;
    width:50%;
    `
    const CardContainer=styled.div`
    width:70%;
    display:inline-flex;
    justify-content:center;
    `
    const Button=styled.button`
margin-top:15px;
align-self:center;
margin-top:4%;
margin-bottom:25%;

text-align:center;
padding:2%;
width:30%;
height:40px;
border:none;
background-color:#2196F3;
font-family:"Poppins";
font-size:16px;
color:White;
border-radius:8px;
`
const Added=styled.button`
margin-top:15px;
align-self:center;
margin-top:25%;
margin-bottom:25%;
margin-left:2%;
text-align:center;
padding:2%;
width:90%;
height:40px;


font-family:"Poppins";
font-size:16px;
border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
border-radius:8px;

`
    export default Details;