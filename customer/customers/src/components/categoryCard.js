import React, {Component} from 'react';
import styled from 'styled-components';
import { Link, Redirect,  } from 'react-router-dom'
import {post,put} from 'axios';
export default class CategoryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
    
          }

    }
    render(){

    return (


        
            <Category af-el="category-card" class="category" >
                
               <StyledLink to={{pathname: `5km/${this.props.item.name}`}}>
                   
                <Link14  class="link-block-14 w-inline-block">
                    <IMG className='catImg' src={`http://localhost:4000/uploads/dairy.jpg`} ></IMG>
                    <Heading af-sock="category-heading" class="card-heading-category">{this.props.item.name}<br /></Heading>
                    
                </Link14>
                </StyledLink>
            </Category>
        


    );
}

}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Category=styled.div`
height:300px;
width:20%;
margin-left:10px;
// background-color: #FDFDFF;
// border: solid 0 #707070;

border-radius:5px;
margin-top:5%;
margin-bottom:5%;
overflow:hidden;
  &:hover{
    // overflow:visible;

    box-shadow: 0 17px 16px 0 rgba(55, 62, 82, 0.25);
    // background-color: #FDFDFF;
// border: solid 0 #707070;
// border: solid 0 #707070;

    -webkit-filter:opacity(.85);
    height:270px;

}
`

const Link14=styled.a`
width: 100%;
height: 100%;
padding: 29px;
text-decoration: none;
max-width: 100%;
display: inline-block;
`
const IMG=styled.img`
opacity:0.8;
width:100%;
height:100%;
border-radius: 3px;
`
const Heading=styled.p`
color: #fff;
font-size: 1.5rem;
line-height: 1.9rem;
font-weight: 700;
text-align: left;
color: #333;
position: absolute;
top: 70px;
font-size: 1.5rem;
font-family:'Poppins';
margin-left:10px;

`