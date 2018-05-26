import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
                    <Link to="/about">
                        <Button bsStyle="primary">About </Button>
                    </Link>
                </Jumbotron>
<Row className="show-grid text-center">
<Col xs={12} sm={4} className="person-wrapper">
<Image src="assets/placeHolderDoctor.png" circle className="profile-pic"/>
            <h3> 1 Month </h3>
            <p>Text text text </p>
            </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/placeHolderPerson.png" circle className="profile-pic" />
                        <h3> 3 Months </h3>
                        <p>Text text text </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/placeHolderPic.jpeg" circle className="profile-pic" />
                        <h3> 2 Months </h3>
                        <p>Text text text </p>
                    </Col>
            </Row>
            </Grid>
        )
    }
}