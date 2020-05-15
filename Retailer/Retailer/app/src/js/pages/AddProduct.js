import React, { Component } from 'react'
import styled from "styled-components";



const Container = styled.div`
padding:2rem;
`;

const Icon = styled.img`
width:${props => props.large ? '50px' : '20px'};
height:${props => props.large ? '50px' : '20px'};
`

const Row = styled.div`
display:flex;
margin-top:1.5rem;
align-items:center;
`;


const TwoColumn = styled.div`
display:flex;
justify-content:space-between;
width:100%;
align-items:center;
margin-top:1rem;
`;

const Label = styled.p`
font-size:1rem;
margin:0;
`;

const Input = styled.input`
border:none;
border-bottom:solid 1px gray;
outline:none;
width:${props => props.large ? '60%' : '150px'};
`

const Tag = styled.p`
background:gray;
padding:.3rem .6rem;
border-radius:8px;
font-size:.9rem;
color:black;
margin:.3rem;
`;

const TagRow = styled(Row)`
    width:60%;
    flex-wrap:wrap;
    align-items:flex-start;
    `;


const Title = styled.h1`
font-size:1.5rem;
margin-left:1.5rem;
`;

const InfoText = styled.p`
color:gray;
font-size:.9rem;
margin:0rem;
`;

const Button = styled.button`
background:black;
color:white;
outline:none;
border:none;
padding:.5rem 1rem;
border-radius:8px;
font-family:Poppins;
`;

const Grid = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
width:90%;
column-gap:3rem;
`

const FirstCol = styled.div``;
const SecondCol = styled.div``;


const File = styled.input``;

const Select = styled.select`
width:150px;
border:none;
border-bottom:solid 1px gray;
outline:none;
`;

const Option = styled.option``;


const RangeContainer = styled.div`
margin:1rem;
margin-bottom:2rem;
`;


const DropDown = () => {
    return <Select>
            <Option value="" disabled  selected >Select your option</Option>
            <Option>a</Option>
            <Option>b</Option>
            <Option>c</Option>
            <Option>d</Option>
    </Select>
}


const Range = ()=>{
return <Input  type="number" min="0" max="10" placeholder="0"  />
}

export default class AddProduct extends Component {
    render() {
        return (
            <Container>

                <Row>
                    <Icon />
                </Row>


                <Row>
                    <Icon large />
                    <Title>Add Product</Title>
                </Row>

                <Row>
                    <InfoText>Fill in the following details to add new product</InfoText>
                </Row>

                <Grid>
                    <FirstCol>
                        <TwoColumn>
                            <Label>Barcode</Label>
                            <Input placeholder="Enter or Scan" />
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Product Name</Label>
                            <Input placeholder="EnterName" />
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Category</Label>
                            <DropDown/>
                        </TwoColumn>


                        <TwoColumn>
                            <Label>Size</Label>
                            <DropDown/>
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Brand</Label>
                            <DropDown/>
                        </TwoColumn>



                    </FirstCol>

                    <SecondCol>
                        <TwoColumn>
                            <Label>Product Image</Label>
                            <File type="file" />
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Details</Label>
                            <Input large placeholder="Enter Details" />
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Suggestion</Label>
                            <TagRow>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                                <Tag>ABC</Tag>
                            </TagRow>
                        </TwoColumn>

                    </SecondCol>



                </Grid>


                <Row>
                <RangeContainer>
                <Label>Product Per Carton</Label>
                <Range/>
                </RangeContainer>
              
                <RangeContainer>
                <Label>Number Per Carton</Label>
                <Range/>
                </RangeContainer>
              

                <RangeContainer>
                <Label>Seller Price</Label>
                <Range/>
                </RangeContainer>
              

                <RangeContainer>
                <Label>Retail Price</Label>
                <Range/>
                </RangeContainer>
              

                <RangeContainer>
                <Label>Product Per Carton</Label>
                <Range/>
                </RangeContainer>
              
              
                </Row>


                <Button>Add Product</Button>


            </Container>
        )
    }
}
