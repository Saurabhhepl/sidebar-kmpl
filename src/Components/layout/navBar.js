import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navigation = () => {
    return (
 
            <Navbar className="bg-dark justify-content-between">


                <Form inline>
                    <Navbar.Brand href="#home"><img src='./assets/images/Layer_1.svg' /></Navbar.Brand>
                </Form>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>

                    </Row>
                </Form>
                <Form inline>
                    <Row>

                        <Col xs="auto" style={{ display: 'flex', gap: '10px' }}>
                            <Button type="submit">+ {""}Submit</Button>

                            <Button type="submit">+ {""}</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        
    );
}

export default Navigation;