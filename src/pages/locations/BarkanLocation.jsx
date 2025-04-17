    // BarkanLocation.jsx
    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";

    export default function BarkanLocation() {
    return (
        <div dir="rtl" style={{ backgroundColor: "#f8f9fa" }}>
        <div
            style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "150px 20px",
            color: "#fff",
            textShadow: "0 0 10px rgba(0,0,0,0.7)",
            }}
        >
            <Container className="text-center">
            <h1 className="display-4 fw-bold">ברקן – יישוב קהילתי איכותי</h1>
            <p className="lead">מגוון מגרשים בטאבו פרטי עם תב"ע מאושרת – לבנייה פרטית או השקעה.</p>
            </Container>
        </div>

        <section className="py-5">
            <Container>
            <Row className="g-5">
                <Col md={6}>
                <h2 className="fw-bold text-primary mb-3">על ברקן</h2>
                <p className="fs-5 text-muted">
                    ברקן הוא יישוב שקט ומבוקש בצפון מערב השומרון, המציע איכות חיים גבוהה, חינוך מצוין, וקהילה מגובשת. היישוב מתאפיין בבנייה פרטית וצמודת קרקע, עם קרקעות בטאבו מלא ותב"ע מאושרת.
                </p>
                <p className="fs-5 text-muted">
                    אנו מציעים שני מתחמים: 8 מגרשים של 500 מ"ר ו-60 מגרשים של 330 מ"ר – שניהם כוללים פיתוח מלא ומוכנים לבנייה.
                </p>
                <ul className="fs-5">
                    <li>✅ טאבו פרטי ותב"ע מאושרת</li>
                    <li>✅ תשתיות קיימות ופיתוח כלול</li>
                    <li>✅ נוף פתוח ואווירה פסטורלית</li>
                </ul>
                <Link to="/properties">
                    <Button variant="primary" size="lg" className="mt-3">לצפייה בנכסים</Button>
                </Link>
                </Col>
                <Col md={6}>
                <iframe
                    title="מפת ברקן"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.2796147918843!2d35.06017627549157!3d32.15733231371202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d2f66d1eb2bcb%3A0xc61283d1576fa721!2z15TXkNeR15zXnCDXl9eV16jXmdeZ150!5e0!3m2!1siw!2sil!4v1712668134220!5m2!1siw!2sil"
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