import './index.css';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const NavBar = () => {
    const history = useHistory();
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Nav className="me-auto">
					<Navbar.Brand>Blog</Navbar.Brand>
						<Nav.Link onClick={() => {history.push('/')}}>Home</Nav.Link>
                        <div className='authDropDown'>
                            <Dropdown>
                                <Dropdown.Toggle variant='dark'>Auth</Dropdown.Toggle>
                                <Dropdown.Menu variant='dark'>
                                    <Dropdown.Item onClick={() => {history.push('/auth/signup')}}>Sign Up</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {history.push('/auth/login')}}>Log In</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
