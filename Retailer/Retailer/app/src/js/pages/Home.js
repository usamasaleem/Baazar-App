import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { Bar, Pie } from "react-chartjs-2";
import Card from '../components/Card';


const Grid = styled.div`
    display:grid;
    grid-template-columns:55% 40%;
    column-gap:1rem;

`;

const Title = styled.h1`

`;


const SectionHeading = styled.p`
  font-size:1.5rem;
`

const FirstColumn = styled.div`
margin-left:2rem
`;


const SecondColumn = styled.div``;


const Box = styled.div`
padding:1.5rem;
margin:2rem 0;
-webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.15);
-moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.15);
box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.15);
`;



const SpacedBox = styled(Box)`
margin-top:10rem;
`;


const BoxTitle = styled.h1`
font-size:2rem;
margin:0;
`;

const SmallHeading = styled.h1`
font-size:.8rem;
color:#9E9E9E;
margin:0;
`;

const Center = styled.div`
display:flex;
justify-content:center;
margin-top:1rem;
`;


const ColorBox = styled.div`
width:30px;
height:10px;
display:inline-block;
border-radius:16px;
background:${props => props.purple ? '#512DA8' : '#d32f2f'};
`;

const Label = styled.p`
font-size:.6rem;
display:inline-block;
margin-left:.6rem;
`;

const LabelContainer = styled.div`
display:flex;
align-items:center;
margin:0 1rem;
`;

const TwoColumnGrid = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
`;

const Row = styled.div`
display:flex;
margin-top:1rem;
align-items:center;
`;


const Img = styled.img`
width:80px;
height:80px;
`;
const Icon = styled(Img)`
 margin-left:2rem;
`;

const InfoText = styled.p`
font-size:1rem;
color:#757575;
`

const LStockTable = styled.table`
width:100%;
text-align:center;
`;

const LStockheading = styled.th`
padding:1rem 0;
`;

const LStockRow = styled.tr`
`;

const LStockData = styled.td``;

const LStockImg = styled.img`
width:40px;
height:40px;
`;


class Home extends Component {
    render() {

        let data = {

            datasets: [
                {
                    backgroundColor: ["#512DA8"],

                    data: [1]
                },
                {
                    backgroundColor: ["#D32F2F"],

                    data: [2]
                }
            ],
            labels: ["Jan", "Fed", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        }

        const options = {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            },
            legend: {
                display: false,
            },
            tooltips: {
                callbacks: {
                    label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
                    title: () => null,
                }
            },
        }


        let pieChartData = {
            labels: ["Flour", "Rice", "Tea", "Hand Wash"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                data: [2478, 5267, 734, 784]
            }]
        }


        return (
            <div>

                <SearchBar />

                <Grid>

                    <FirstColumn>
                        <Title>Dashboard</Title>
                        <SectionHeading>Sales</SectionHeading>
                        <Box>
                            <SmallHeading>Summary</SmallHeading>
                            <BoxTitle>Sales Chart</BoxTitle>
                            <Center>
                                <LabelContainer>
                                    <ColorBox />
                                    <Label>Sales</Label>
                                </LabelContainer>

                                <LabelContainer>
                                    <ColorBox purple />
                                    <Label>Profit</Label>
                                </LabelContainer>
                            </Center>

                            <Center>
                                <Bar data={data} options={options} />
                            </Center>

                        </Box>

                        <SectionHeading>Products</SectionHeading>

                        <Row>
                            <Box>
                                <Center><Img /></Center>
                                <Center><SmallHeading>Add Product</SmallHeading></Center>
                            </Box>

                            <Card title="Total Products" number="191" icon="" />
                            <Card title="Out of Stock" number="191" icon="" />

                        </Row>


                        <InfoText>Low Stock Items - Product insight here</InfoText>
                        <Box>
                            <LStockTable>
                                <LStockRow>
                                    <LStockheading>#</LStockheading>
                                    <LStockheading></LStockheading>
                                    <LStockheading>Product Name</LStockheading>
                                    <LStockheading>Product ID</LStockheading>
                                    <LStockheading>Qty</LStockheading>
                                </LStockRow>

                                <LStockRow>
                                    <LStockData>1</LStockData>
                                    <LStockData><LStockImg /></LStockData>
                                    <LStockData>Corn Flakes</LStockData>
                                    <LStockData>691234</LStockData>
                                    <LStockData>10</LStockData>
                                </LStockRow>

                                <LStockRow>
                                <LStockData>1</LStockData>
                                <LStockData><LStockImg /></LStockData>
                                <LStockData>Corn Flakes</LStockData>
                                <LStockData>691234</LStockData>
                                <LStockData>10</LStockData>
                            </LStockRow>

                            <LStockRow>
                            <LStockData>1</LStockData>
                            <LStockData><LStockImg /></LStockData>
                            <LStockData>Corn Flakes</LStockData>
                            <LStockData>691234</LStockData>
                            <LStockData>10</LStockData>
                        </LStockRow>

                        <LStockRow>
                        <LStockData>1</LStockData>
                        <LStockData><LStockImg /></LStockData>
                        <LStockData>Corn Flakes</LStockData>
                        <LStockData>691234</LStockData>
                        <LStockData>10</LStockData>
                    </LStockRow>


                            </LStockTable>
                        </Box>

                    </FirstColumn>


                    <SecondColumn>

                        <SpacedBox>
                            <SmallHeading>Overview</SmallHeading>
                            <BoxTitle>Top 5 Selling items</BoxTitle>

                            <Center>
                                <TwoColumnGrid>
                                    <Pie data={pieChartData} />
                                </TwoColumnGrid>
                            </Center>

                        </SpacedBox>

                        <Box>
                            <BoxTitle>Today Sales</BoxTitle>
                            <Row>
                                <Title>12456</Title>
                                <Icon />
                            </Row>
                        </Box>



                    </SecondColumn>

                </Grid>



            </div>
        );
    }
}

export default Home;
