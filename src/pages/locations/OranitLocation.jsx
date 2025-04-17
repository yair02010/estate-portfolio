    // OranitLocation.jsx
    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";

    export default function OranitLocation() {
    return (
        <div dir="rtl" style={{ backgroundColor: "#f7f9fc" }}>
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
            <h1 className="display-4 fw-bold">אורנית – טבע, קהילה והשקעה</h1>
            <p className="lead">יישוב איכותי המשלב בין שלווה לפוטנציאל נדל"ני.</p>
            </Container>
        </div>

        <section className="py-5">
            <Container>
            <Row className="g-5">
                <Col md={6}>
                <h2 className="fw-bold text-primary mb-3">על אורנית</h2>
                <p className="fs-5 text-muted">
                    אורנית היא יישוב קהילתי בגבול השומרון, הנמצא במרחק קצר מפתח תקווה ותל אביב. מדובר ביישוב ירוק ופסטורלי עם קהילה חזקה, חינוך איכותי, ורמה תכנונית גבוהה. בשנים האחרונות ניכרת באורנית מגמה של פיתוח מואץ, והיא מהווה מוקד משיכה למשפחות, יזמים ומשקיעים כאחד.
                </p>
                <p className="fs-5 text-muted">
                    המגרשים המוצעים לשיווק הינם בטאבו פרטי, עם תב"ע מאושרת לבניית וילות. החלוקה למגרשים בני 330 מ"ר מאפשרת תכנון מותאם אישית ובנייה איכותית.
                </p>
                <ul className="fs-5">
                    <li>✅ 300 דונם זמינים להשקעה</li>
                    <li>✅ סביבה ירוקה עם נוף פתוח</li>
                    <li>✅ חיבור מצוין למרכז הארץ</li>
                    <li>✅ אפשרות לתכנון אדריכלי חופשי</li>
                </ul>
                <Link to="/properties">
                    <Button variant="primary" size="lg" className="mt-3">לצפייה בנכסים</Button>
                </Link>
                </Col>
                <Col md={6}>
                <iframe
                    title="מפת אורנית"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.1128934262953!2d35.02026727548926!3d32.06179042097037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3488b2cf30c1%3A0xb90c1245e3b3e942!2z15TXldek15zXmdeZ!5e0!3m2!1siw!2sil!4v1712667578413!5m2!1siw!2sil"
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