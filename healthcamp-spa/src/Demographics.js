import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, InputGroup, Form, FormControl } from 'react-bootstrap';

class Demographics extends Component {
    render() {
        return (
            <Container>
            <Row>
            <Col>
                <div>
                {/* First Name */}
                <br />
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">First Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />

            {/* Last Name */}
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Last Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />

            {/* Gender */}
            <Form.Control as="select" className="mr-sm-2">
                <option value="0">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Form.Control>
            <br />

            {/* Age */}
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Age</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />

            {/* Notes */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <br />

            {/* Save Button */}
            <Button variant="primary" size="lg" block>
                Save
            </Button>
            </div>
            </Col>

            <Col>
            <br />
            <h2>Webcam</h2>
            </Col>
            </Row>
            </Container>
        ); 
    }
}

export default Demographics; 