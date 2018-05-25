import React, { Component } from 'react'
import { Linke } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            //grid is like container
            <Grid>
                <Jumbotron>
                <h2> Welcome Welcome </h2>
                <p> Website </p>
                </Jumbotron>
            <Link to="/about">
<Button bsStyle="primary">About </Button> 
            </Link>
            </Grid>
        )
    }
}