import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Table } from 'react-bootstrap';

class Reports extends Component {
    render() {
        return (
            <Container>
            <Row>
                <Col>
                <br />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Photo</th>
                            <th>Medications</th>
                            <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* entry 1 */}
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>photo 1</td>
                            <td>he's sick</td>
                            </tr>

                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>

                </Col>
            </Row>

            </Container>

        ); 
    }
}

export default Reports; 