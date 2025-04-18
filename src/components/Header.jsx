    import { Link, NavLink } from "react-router-dom";
    import { Container, Nav, Navbar } from "react-bootstrap";
    import logo from "../assets/logo.png";
    import "../styles/header.css"; // נוסיף גם CSS לשליטה מוחלטת

    export default function Header() {
    const links = [
        { to: "/", label: "דף הבית" },
        { to: "/properties", label: "נכסים" },
        { to: "/locations", label: "אזורים" },
        { to: "/about", label: "אודות" },
        { to: "/contact", label: "צור קשר" },
    ];

    return (
        <Navbar
        expand="lg"
        sticky="top"
        className="header-navbar"
        dir="rtl"
        >
        <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
            <img
                src={logo}
                alt="יוסף 2000 מקרקעין"
                className="header-logo"
            />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main-nav" style={{ backgroundColor: "#fff" }} />

            <Navbar.Collapse id="main-nav">
            <Nav className="nav-links ms-auto">
                {links.map(({ to, label }) => (
                <Nav.Link
                    as={NavLink}
                    to={to}
                    key={to}
                    className="nav-link-item"
                >
                    {label}
                </Nav.Link>
                ))}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }
