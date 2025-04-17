    import { Container, Row, Col } from "react-bootstrap";

    export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
        <Container>
            <Row className="text-center text-md-start align-items-center">
            <Col md={6}>
                <p className="mb-1">
                © {new Date().getFullYear()} יוסף 2000 מקרקעין<br />
                אתר זה נבנה ועוצב על ידי יאיר ירושלמי 💻
                </p>
            </Col>
            <Col md={6}>
                <p className="mb-1">
                📞 054-4977076 | ✉️ Signon150@gmail.com — <strong>רות הלפגוט</strong><br />
                📞 052-7721100 | ✉️ israel33333@gmail.com — <strong>דייר עלי נגאר</strong>
                </p>
            </Col>
            </Row>
        </Container>
        </footer>
    );
    }
