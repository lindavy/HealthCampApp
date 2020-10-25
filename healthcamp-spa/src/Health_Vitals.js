import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, InputGroup, Form, FormControl } from 'react-bootstrap';

class Health_Vitals extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {/* Height */}
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Height</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Feet"
                            />
                        </InputGroup>
                        <br />

                        {/* Weight */}
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Weight</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Pounds"
                        />
                        </InputGroup>
                        <br />

                        {/* Body Temp */}
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Body Temperature</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Farenheit"
                            />
                        </InputGroup>
                        <br />
                
                        {/* Pulse Rate */}
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Pulse Rate</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Beats per Minute"
                            />
                        </InputGroup>
                        <br />

                        {/* Blood Pressure */}
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Blood Pressure (BP)</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="mm Hg"
                            />
                        </InputGroup>
                        <br />

                    {/* Save Button */}
                    <Button variant="primary" size="lg" block>
                        Save
                    </Button>
                    </Col>

                    <Col>
                    
                    {/* Medications */}
                    <br />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Medications</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <br />

                    {/* Notes */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <br />
                    </Col>
                </Row>
            </Container>
        ); 
    }
}

export default Health_Vitals; 