import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
    return (
        <Navbar bg="success" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
           <img
              src="/vegetables-15434.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
             Vegges
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Shopping" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Store</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Checkout
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">About</Nav.Link>           
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Menu;