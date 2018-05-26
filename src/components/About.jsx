import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/2 months.JPG" className="header-image " />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/1 month.JPG" className="about-profile-pic" rounded />
                        <h3> Dylan 1 Month </h3>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>


                    </Col>
                </Grid>
                ABOUT PAGE
            </div>
        )
    }

}