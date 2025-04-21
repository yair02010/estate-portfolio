    import { useState } from "react";
    import { Link, NavLink } from "react-router-dom";
    import { Container, Nav, Navbar } from "react-bootstrap";
    import logo from "../assets/logo.png";
    import "../styles/header.css"; // הקובץ שלך עם CSS

    export default function Header() {
    const [expanded, setExpanded] = useState(false); // שליטה על פתיחה/סגירה

    const closeNavbar = () => setExpanded(false); // פונקציה לסגירה

    return (
        <Navbar
        expand="lg"
        expanded={expanded}
        className="header-navbar"
        sticky="top"
        >
        <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
            <img src={logo} alt="לוגו" className="header-logo" />
            </Navbar.Brand>

            <Navbar.Toggle
            aria-controls="nav"
            onClick={() => setExpanded(!expanded)}
            style={{ backgroundColor: "white" }}
            />

            <Navbar.Collapse id="nav">
            <Nav className="ms-auto nav-links">
                {[
                { to: "/", label: "דף הבית" },
                { to: "/properties", label: "נכסים" },
                { to: "/locations", label: "אזורים" },
                { to: "/about", label: "אודות" },
                { to: "/contact", label: "צור קשר" },
                ].map(({ to, label }) => (
                <Nav.Link
                    key={to}
                    as={NavLink}
                    to={to}
                    onClick={closeNavbar} // כאן הסגירה ברגע לחיצה
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
