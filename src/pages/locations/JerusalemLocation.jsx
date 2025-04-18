    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import "../../styles/jerusalem.css";

    export default function JerusalemLocation() {
    return (
        <div dir="rtl" className="jerusalem-page">
        <header className="jerusalem-hero">
            <Container>
            <h1 className="jerusalem-title">ירושלים – בכותל המערבי</h1>
            <p className="jerusalem-subtitle">
                בניין ייחודי בשטח של 950 מ"ר בשלוש קומות – בצמוד לכותל המערבי.
            </p>
            </Container>
        </header>

        <section className="jerusalem-content py-5">
            <Container>
            <Row className="g-5 align-items-center">
                <Col md={6}>
                <h2 className="jerusalem-section-title">למה זה הנדל"ן הכי נדיר בארץ?</h2>
                <p className="jerusalem-paragraph">
                    מדובר בנכס ייחודי במיקום הקדוש ביותר בעולם – סמוך לכותל המערבי ולכיפת הסלע.
                    הנכס כולל בניין בן 3 קומות, זכויות בנייה נדירות, ושימושים מגוונים לתיירות, מסחר, או השקעה היסטורית.
                </p>
                <ul className="jerusalem-list">
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
                <div className="jerusalem-map-wrapper">
                    <iframe
                    title="מפת ירושלים"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5306252852165!2d35.2324740754945!3d31.77666327414701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d5d9055f0b7b%3A0x2e99c3eaadf7ab4f!2z15nXqNeo15HXmNeZ15XXnCDXqNeZ150g15nXkdeo16jXpNeZ!5e0!3m2!1siw!2sil!4v1713353345671!5m2!1siw!2sil"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </Col>
            </Row>
            </Container>
        </section>
        </div>
    );
    }
