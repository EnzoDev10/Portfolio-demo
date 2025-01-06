import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import spanishIcon from '../../assets/icons/spain-flag.png';
import englishIcon from '../../assets/icons/usa-flag.png';
export const Header = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">Dot Dager</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto gap-md-5">
						<Nav.Link href="#home">Inicio</Nav.Link>
						<Nav.Link href="#link">Sobre Mi</Nav.Link>
						<NavDropdown
							title={
								<img
									style={{ width: '35px', height: '25px' }}
									src={englishIcon}
									alt=""
								/>
							}
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1"> </NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
/* 		<header>
			<nav class="navbar navbar-expand-lg navbar-dark">
				<div class="container-md">
					<a class="navbar-brand raleway-black focus-ring rounded p-1" href="#">
						Dot Dager
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav gap-4 ms-auto align-items-md-center">
							<li class="nav-item">
								<a href="#hero" class="nav-link p-1 rounded">
									Inicio
								</a>
							</li>
							<li class="nav-item">
								<a href="#about-me" class="nav-link p-1 rounded">
									Sobre Mi
								</a>
							</li>
							<li class="nav-item">
								<a href="#contact" class="nav-link p-1 rounded">
									Contacto
								</a>
							</li>
							<li class="nav-item">
								<button class="lang-btn focus-ring rounded btn p-1">
									<img src="assets/icons/spain-flag.png" class="icon-img" />
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
 */
