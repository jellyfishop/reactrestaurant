import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://cdn3.iconfinder.com/data/icons/food-delivery-6/64/12-Fast_food-512.png"
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                        />{' '}
                        <strong>Let's find!</strong>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header