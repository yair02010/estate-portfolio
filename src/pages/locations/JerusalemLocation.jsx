    // src/pages/locations/JerusalemLocation.jsx
    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";

    export default function JerusalemLocation() {
    return (
        <div dir="rtl" style={{ backgroundColor: "#f7f9fc" }}>
        <div
            style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "150px 20px",
            color: "#fff",
            textShadow: "0 0 10px rgba(0,0,0,0.7)",
            backgroundImage: `url("/images/kotel-building.jpg")`, // הוסף את התמונה שאתה רוצה ב־public/images
            }}
        >
            <Container className="text-center">
            <h1 className="display-4 fw-bold">ירושלים – בכותל המערבי</h1>
            <p className="lead">
                בניין ייחודי בשטח של 950 מ"ר בשלוש קומות – בצמוד לכותל המערבי.
            </p>
            </Container>
        </div>

        <section className="py-5">
            <Container>
            <Row className="g-5">
                <Col md={6}>
                <h2 className="fw-bold text-primary mb-3">למה זה הנדל"ן הכי נדיר בארץ?</h2>
                <p className="fs-5 text-muted">
                    מדובר בנכס ייחודי במיקום הקדוש ביותר בעולם – סמוך לכותל המערבי ולכיפת הסלע. הנכס כולל בניין בן 3 קומות, זכויות בנייה נדירות, ושימושים מגוונים לתיירות, מסחר, או השקעה היסטורית.
                </p>
                <ul className="fs-5">
                    <li>✅ 950 מ"ר בנוי בשלוש קומות</li>
                    <li>✅ סמוך לכותל המערבי</li>
                    <li>✅ פוטנציאל מסחרי ותיירותי עצום</li>
                </ul>
                <Link to="/properties">
                    <Button variant="primary" size="lg" className="mt-3">
                    לצפייה בנכסים
                    </Button>
                </Link>
                </Col>
                <Col md={6}>
                <iframe
                    title="מפת ירושלים"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5306252852165!2d35.2324740754945!3d31.77666327414701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d5d9055f0b7b%3A0x2e99c3eaadf7ab4f!2z15nXqNeo15HXmNeZ15XXnCDXqNeZ150g15nXkdeo16jXpNeZ!5e0!3m2!1siw!2sil!4v1713353345671!5m2!1siw!2sil"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </Col>
            </Row>
            </Container>
        </section>
        </div>
    );
    }
