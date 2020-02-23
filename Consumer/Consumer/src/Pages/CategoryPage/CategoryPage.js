import React, { Component } from 'react'
import "./CategoryPage.scss";
import SortBar from '../../components/SortBar/SortBar';
import Card from '../../components/Card/Card';
import { Pagination } from '@material-ui/lab';
import Filter from '../../components/Filter/Filter';



class CategoryPage extends Component {



    render() {
        const { classes } = this.props;



        return (
            <>
                <div className="CategoryPage">

                    <div className="CategoryPage-filterContainer">
                    <Filter />
                    </div>

                    <div className="CategoryPage-content CategoryPage-header">
                        <h1 className="CategoryPage__title">Category</h1>
                        <p className="CategoryPage__description">69 Items found in category</p>
                        <div className="CategoryPage-sortBarContainer">
                            <SortBar />
                        </div>

                        <div className="CategoryPage-items">
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                            <Card categoryCard />
                        </div>

                        <div className="CategoryPage-pagination">
                            <Pagination count={10} color="primary" variant="outlined" shape="rounded" size="large"
                            />
                        </div>

                    </div>





                </div>
            </>
        )
    }
}


export default CategoryPage
