    // BeitElLocation.jsx
    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";

    export default function BeitElLocation() {
    return (
        <div dir="rtl" style={{ backgroundColor: "#f8f9fb" }}>
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
            <h1 className="display-4 fw-bold">בית אל – שילוב נדיר של איכות, מיקום והשקעה</h1>
            <p className="lead">60 דונם פרטיים + 6 דונם לבנייה רוויה – הזדמנות במיקום מצוין.</p>
            </Container>
        </div>  

        <section className="py-5">
            <Container>
            <Row className="g-5">
                <Col md={6}>
                <h2 className="fw-bold text-primary mb-3">מה מייחד את בית אל?</h2>
                <p className="fs-5 text-muted">
                    בית אל ממוקמת בנקודת גובה עם נוף פתוח, אוויר הרים ונגישות נוחה למרכז הארץ. מדובר ביישוב עם חיי קהילה עשירים, חינוך איכותי ותחושת ביטחון גבוהה.
                </p>
                <p className="fs-5 text-muted">
                    הנכסים בבית אל כוללים מגרש ענק של 60 דונם בטאבו פרטי – אידיאלי לפיתוח עתידי – וכן מגרש של 6 דונם עם תב"ע לבנייה רוויה. שילוב ייחודי של השקעה לטווח קצר וארוך.
                </p>
                <ul className="fs-5">
                    <li>✅ בעלות פרטית מלאה בטאבו</li>
                    <li>✅ תב"ע בתוקף לבנייה רוויה</li>
                    <li>✅ יישוב עם פוטנציאל נדל"ני הולך וגדל</li>
                </ul>
                <Link to="/properties">
                    <Button variant="primary" size="lg" className="mt-3">לצפייה בנכסים</Button>
                </Link>
                </Col>
                <Col md={6}>
                <iframe
                    title="מפת בית אל"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.259578377329!2d35.22451107548812!3d31.94830512703364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e4307eafff0f%3A0xb10dcb9e304a3c1a!2z15TXkdeZ15XXlCDXmdeU15XXoNeZ!5e0!3m2!1siw!2sil!4v1712670782896!5m2!1siw!2sil"
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
