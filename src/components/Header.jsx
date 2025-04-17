    import { Link, NavLink } from "react-router-dom";
    import { Container, Nav, Navbar } from "react-bootstrap";
    import logo from "../assets/logo.png";

    export default function Header() {
    return (
        <Navbar
        expand="lg"
        sticky="top"
        className="shadow-sm"
        style={{
            background: "linear-gradient(to right, #0D1B2A, #1B263B)",
            padding: "0.6rem 1rem",
            margin: "0",
            width: "100%",
            zIndex: 1000,
        }}
        >
        <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
            <img
                src={logo}
                alt="יוסף 2000 מקרקעין"
                style={{
                height: "52px",
                width: "52px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid white",
                backgroundColor: "#fff",
                padding: "4px",
                }}
            />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="nav" style={{ backgroundColor: "white" }} />

            <Navbar.Collapse id="nav">
            <Nav className="ms-auto text-center text-lg-start">
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
                    className="text-white fw-semibold mx-2"
                    style={{ fontSize: "1rem" }}
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
