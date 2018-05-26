import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/placeHolderBanner.png" className="header-image " />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/placeHolderPic.jpeg" className="about-profile-pic" rounded />
                        <h3> Dylan 1 Month </h3>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>
                        <p>dsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajksdsadfdlljkfadslkjsadlkjljksflkjdsfajkajks</p>


                    </Col>
                </Grid>
                ABOUT PAGE
            </div>
        )
    }

}