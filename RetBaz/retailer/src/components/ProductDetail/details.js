import React, { Component } from 'react'

import styled from 'styled-components';
import ExpandedCard from "../ExpandedCard/ExpandedCard"
import Navbar from "../Navbar/navbar"
import InventoryCard from "../InventoryCard/inventoryCard"
import Search from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faBell ,faBox,faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import Icon from "../../assets/images/Avatar.jpg";
export default class Details extends Component {
    render() {
        return (
            <>
        <DetailSection>
        <Navbar/>
                <Div>
                    <SearchBar>
                        <Search />
                        <NavBar_iconContainer className="NavBar-iconContainer">
                        <Shopping_cart ><FontAwesomeIcon icon={ faBell }/></Shopping_cart>
                            <User ><FontAwesomeIcon icon={ faUser }/></User> 
                        </NavBar_iconContainer>
                    </SearchBar>
                    <SubDiv>

                        <Products>
                            <ExpandedCard />
                        </Products>

                        <ProductSaleSummary>
                        <Title>
                            <Heading>Product Sale Summary</Heading>
                            
                        
                        </Title>
                            
                        </ProductSaleSummary>

                        <ProductSaleSummary>
                        <Title>
                            <Heading>Inventory</Heading>
                        </Title>
                        <Cardcontainer className="Cardcontainer" >
                    <CardText className="CardText">#</CardText>
                    <CardimageContainer className="CardimageContainer">
                        <Cardimage className="Cardimage"></Cardimage>
                    </CardimageContainer>
                    
                    <CardText className="CardText">Product Name</CardText>
                    <CardText className="CardText">SKU</CardText>
                    <CardText className="CardText">Category</CardText>
                    <CardText className="CardText info">Size</CardText>
                    <CardText className="CardText info">Stock</CardText>
                    <CardText className="CardText info"></CardText>

                </Cardcontainer>
                        <InventoryCard  />
                        <InventoryCard  />
                        <InventoryCard  />
                            
                 </ProductSaleSummary>

                
                </SubDiv>
            </Div>
               
         </DetailSection>
            </>
        )
    }
}
const Heading=styled.p
`
font-family:'Poppins';
font-size:24px;
`
const Title =styled.div
`
height:15%;
display: inline-flex;

`
const ProductSaleSummary=styled.div`
width:65%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:80%;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: auto;
margin-bottom:20px;
`
const DetailSection=styled.section
    `
    width:100%;
    display: inline-flex;
    flex-direction:row;
    height:100%;
    `
const CardContainer=styled.div
`
height:30%;
`
const Div=styled.div`
width:100%;
display:block;
padding-left:20%;
`

const Button=styled.button
`
align-self: center;
    margin-left: 330px;
    margin-top: 20px;
    border-radius: 50px;
    background-color: white;
    border: 2px solid #2196F3;
    font-size: .9rem;
    color:#2196F3;
    font-size:12px;
    font-weight:bold;
    padding:5px;
    cursor:pointer;
`

const SubDiv=styled.div
`
display:block;
height:80%;
width:100%;

`

const SearchBar =styled.div
`
height:20%;

width:100%;
display:inline-flex;
align-items: center;
padding-left:4%;
`
const Products = styled.div`
width:70%;
background-color:white;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:max-content;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;
overflow: hidden;
`

const NavBar_iconContainer=styled.div`
    width: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `
const Shopping_cart  =styled.i`
margin: 0 1rem;
font-size: 1.5rem;
color:#BDBDBD;
cursor: pointer
`
const User  =styled.i`
margin: 0 1rem;
font-size: 1.5rem;
color:#BDBDBD;

cursor: pointer
`

const Cardcontainer=styled.div`
    font-family: 'Poppins',sans-serif;
    letter-spacing: .5pt;
    display: flex;
    
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
  
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    color:#BDBDBD;
`

const CardimageContainer=styled.div`
  display: flex;  
  border-radius: 50%;
  background: rgb(221, 221, 221);
//   padding:.5rem;
  width: 36px;

`

const Cardimage=styled.img`
  width:100%;
`