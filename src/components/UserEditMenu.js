import React, { useState } from 'react';
import Customerviewmenu from './Customerviewmenu';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


const RestaurantUserAddMenuPage = () => {
    const [cart, setCart] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        tableNumber: '',
        specialRequests: ''
    });

    const menuItems = [
        <Customerviewmenu/>
        // { id: 1, name: 'Burger', price: 10 },
        // { id: 2, name: 'Pizza', price: 12 },
        // { id: 3, name: 'Salad', price: 8 },
        // Add more menu items as needed
    ];

    const addToCart = (menuItem) => {
        setCart([...cart, menuItem]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        setShowCheckout(true);
    };

    const handleCheckout = () => {
        // Handle checkout
        console.log('Checkout:', cart, formData);
        // Show order confirmation message or redirect to confirmation page
    };

    return (
        <Container className="my-4">
            <Row>
                <Col md={8}>
                    <h2>Menu</h2>
                    <Row>
                        {menuItems.map(item => (
                            <Col key={item.id} md={4} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>price:{item.price}</Card.Text>
                                        <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    <h2>Cart</h2>
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item">{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                    {showCheckout ? (
                        <div>
                            <h2>Checkout</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="lasttName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="Email">
                                    <Form.Label> Email</Form.Label>
                                    <Form.Control type="Email" name="Email" value={formData.Email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>phoneNumber</Form.Label>
                                    <Form.Control type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="TableNumber">
                                    <Form.Label>TableNumber</Form.Label>
                                    <Form.Control type="number" name="TableNumber" value={formData.TableNumber} onChange={handleChange} />
                                </Form.Group>
                                {/ Add other form fields /}
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    ) : (
                        <Button variant="success" onClick={handleCheckout} disabled={cart.length === 0}>Checkout</Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default RestaurantUserAddMenuPage;
