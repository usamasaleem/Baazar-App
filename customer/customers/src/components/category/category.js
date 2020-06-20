import React, { Component } from 'react';
import add from '../../assets/icons/plus.svg'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar'
import cover from '../../assets/icons/cover.svg'
 import {devices} from '../../assets/devices/devices'
import Navbar from '../Navbar/navbar'
import Card from '../ProductCard/card'
import  Footer from '../Footer/Footer'
import {get} from 'axios';
import ProductFilters from '../filterBar/filterProducts'
import {reactLocalStorage} from 'reactjs-localstorage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
class category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            products:[]
       
          }
          this.print = this.print.bind(this)
    }

    componentDidMount() {
        this.getProducts();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        this.getProducts().then((response)=>{
            reactLocalStorage.set('redirect',false)
            this.setState({
              data:response.data
            });
            console.log(response.data);


           
          });
          
      }
      print(){
          console.log("Nauman");
      }
    getProducts(){
        const url = 'http://localhost:4000/product/category/'+reactLocalStorage.get('category');
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }



    render() {
        

        return (
        <Section>
        <Navbar />
        <DIV>
        <FilterContainer>


            <InnerContainer>
            <Title>
                            <Heading>Filter</Heading>
                            
                        
                        </Title>
            
            <ProductFilters />
            </InnerContainer>

            </FilterContainer>

        <Products>
                <CoverImage src={cover}>  

                </CoverImage>

                
                    <Title>
                    <Heading>Products</Heading>
                    </Title>

                    <Row>
                    {this.state.data.map((item) => 
                      <Card item={item} value={item._id} ></Card>)
                            }
                       
                    </Row>
                
                    

                
            </Products>
           
        </DIV>
        <Footer />
        </Section>
     
        )

    }
}

const Section=styled.section
    `
    width:100%;
    display: block;
   overflow:hidden;
    height:100%;
    `

    const Icon=styled.img`
    width: 18px;
    
    left: 25%;
    top: 5px;
    cursor: pointer;
    margin-left:35%;
    
    `
const DIV=styled.div
`
width:100%;
display: flex;
height:90%;
`
const Heading=styled.p
`
font-family:'Poppins';
font-size:24px;
`
const Title =styled.div
`
height:5%;
display: inline-flex;
width:100%;
margin-left:9%;

`
const InnerContainer =styled.div
`
width:100%;
background-color:white;

height:max-content;

overflow: hidden;
display:block;
`


const FilterContainer = styled.div`
width:15%;
justify-content: space-between;
align-items: center;
height:100%;


`
const StoreFilter = styled.div`
width:100%;
display: flex;
flex-direction: column;
border-top: 2px solid #BDBDBD;
margin-left: 9%;
display: inline-flex;
flex-direction: row;
`
const TagContainer=styled.div
`
display:inline-flex;
width:100%;
flex-wrap:wrap;
align-items:flex-start;
justify-content:center;

`
const SmallHeadings=styled.p
`
color:#787878;
font-family:"Poppins";
font-size:18px;
width: 84.55px;
`
const Tags=styled.p
`
background:gray;
padding:.3rem .6rem;
border-radius:8px;
font-size:.9rem;
color:black;
margin:.3rem;
width:fit-content;
`
const Products=styled.div`
// width:100%;
//     display: inline-flex;
//     flex-direction:row;
//     height:100%;
width: 60%;
height:70%;
margin-left: 10%;
}
`

const CoverImage=styled.img`

height:300px;
width:100%;
border-radius:13px;
margin-top:40px;
`




const Row=styled.div`
display:inline-flex;
width:100%;
flex-wrap:wrap;
align-items:flex-start;
justify-content:center;
overflow:hidden;
padding-bottom:20px;
border-top:1px solid #BDBDBD;
`
export default category;


