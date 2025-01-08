import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

import spanishIcon from '../../assets/icons/spain-flag.png';

import englishIcon from '../../assets/icons/usa-flag.png';

export const Header = () => {
	return (
		<>
			<style type="text/css">{}</style>
			<Navbar expand="lg" bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand className="fs-4 fw-bold" href="#home">
						Dot Dager
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto gap-md-5">
							<Nav.Link href="#home">Inicio</Nav.Link>
							<Nav.Link href="#link">Sobre Mi</Nav.Link>
							<Nav.Link href="#link">Contacto</Nav.Link>
							<NavDropdown
								title={<img src={englishIcon} className="flag" alt="" />}
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item href="#action/3.1">
									<img src={spanishIcon} className="flag" alt="" />
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
