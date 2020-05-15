import React, { Component } from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar'
 import {devices} from '../../assets/devices/devices'


class navbar extends Component {

    constructor(props) {
        super(props);
    }


 

    render() {

        return (<>
        <Navbar>
            <NavBartitleContainer className="NavBar-titleContainer">
           
            <NavBar__logo className="NavBar__logo">Baazar.</NavBar__logo>
            <DashBoard><Icon><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon></Icon><Route href="#">Dashboard</Route></DashBoard>
            <Products><Icon><FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon></Icon><Route href="#">Products </Route></Products>
            </NavBartitleContainer>

            <SubNavContent>
           
            <Sales><Icon><FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon></Icon><Route href="#">Sales</Route></Sales>
            <Analytics><Icon><FontAwesomeIcon icon={faCog}></FontAwesomeIcon></Icon><Route href="#">Analytics </Route></Analytics>
            </SubNavContent>
        </Navbar>
             

        </>
        )

    }
}

const Icon =styled.i
`
position:relative;
top:10px;
margin-right:10px;
font-size:1.5rem;
`


const Navbar = styled.div`
width:20%;
justify-content: space-between;
align-items: center;
height:100%;

position:fixed;
background-color:#292929;
  
`
const NavBartitleContainer = styled.div`
// width: 25%;
margin-top:18%;
display: block;
align-items: center;
text-align:center;
height:50%;
`


const NavBar__logo=styled.p
` margin: 0;

padding: 0;
cursor: pointer;
color:white;
font-family: 'Poppins';
font-size:2rem;
`
const DashBoard=styled.div
`
margin-top:45%;
background-color:black;

height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:18px;
font-weight:lighter;

`
const Products=styled.div
`

height:55px;
color:white;
font-family:'Poppins';
text-decoration:none;
padding-right:12px;
font-size:18px;
font-weight:lighter;
`
const Route=styled.a
`
position:relative;
top:10px;
text-decoration:none;
text-align:center;
&:visited{
   color:white;
  }
`
const SubNavContent=styled.div
`
margin-top:18%;
display: block;
align-items: center;
text-align:center;

`
const Sales=styled.div
`
margin-top:45%;

height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:12px;
font-weight:lighter;
padding-right:15px;
`
const Analytics=styled.div
`

height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:12px;
font-weight:lighter;
`

// const NavBartitleContainer = styled.div`
// width: 25%;
// display: flex;
// align-items: center;
// @media ${devices.mobileM && devices.max }  { 
//     width:100%;
//   }
// `
// const ICON=styled.i
// ` font-size: 1.5rem;
// margin-right: 1.2rem;
// margin-left: 1.5rem;
// cursor: pointer;
// color:white
// `

// const NavBar__logo=styled.p
// ` margin: 0;

// padding: 0;
// cursor: pointer;
// color:white;
// font-family: 'Poppins';
// font-size:2.875rem;


// `
// const Search=styled.div
// ` 
// position:relative;
// left:10%;
// @media ${devices.mobileM && devices.max }  { 
//     position:relative;
//     left:0%;
//   }
// `
// const NavBar_iconContainer=styled.div`
//     width: 10%;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     @media ${devices.mobileM && devices.max } { 
//         position:relative;
//         left:70%;
//         top:-40px;
//         width:fit-content;
//       }
//     `
// const Shopping_cart  =styled.i`
// margin: 0 1rem;
// font-size: 1.5rem;
// color:#BDBDBD;
// cursor: pointer
// `
// const User  =styled.i`
// margin: 0 1rem;
// font-size: 1.5rem;
// color:#BDBDBD;

// cursor: pointer
// `
// const Category=styled.i`
// // @import pop url('https://fonts.googleapis.com/css?family=Poppins:200&displ');
// margin: 0 1rem;
// font-size: 1.125rem;
// // font-family:"pop";
// color:#BDBDBD;
// width:10%;
// cursor: pointer
// font-weight:lighter;
// justify-content:flex-center;
// @media ${devices.mobileM && devices.max }  { 
//     align-self:center;
//   }

// `
export default navbar;


