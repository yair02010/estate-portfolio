    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import "../../styles/oranit.css";

    export default function OranitLocation() {
    return (
        <div dir="rtl" className="oranit-page">
        <header className="oranit-hero">
            <Container>
            <h1 className="oranit-title">אורנית – טבע, קהילה והשקעה</h1>
            <p className="oranit-subtitle">יישוב איכותי המשלב בין שלווה לפוטנציאל נדל"ני.</p>
            </Container>
        </header>

        <section className="oranit-content py-5">
            <Container>
            <Row className="g-5 align-items-center">
                <Col md={6}>
                <h2 className="oranit-section-title">על אורנית</h2>
                <p className="oranit-paragraph">
                    אורנית היא יישוב קהילתי בגבול השומרון, הנמצא במרחק קצר מפתח תקווה ותל אביב.
                    מדובר ביישוב ירוק ופסטורלי עם קהילה חזקה, חינוך איכותי, ורמה תכנונית גבוהה.
                </p>
                <p className="oranit-paragraph">
                    המגרשים המוצעים לשיווק הינם בטאבו פרטי, עם תב"ע מאושרת לבניית וילות.
                    החלוקה למגרשים בני 330 מ"ר מאפשרת תכנון מותאם אישית ובנייה איכותית.
                </p>
                <ul className="oranit-list">
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
                <div className="oranit-map-wrapper">
                    <iframe
                    title="מפת אורנית"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.1128934262953!2d35.02026727548926!3d32.06179042097037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3488b2cf30c1%3A0xb90c1245e3b3e942!2z15TXldek15zXmdeZ!5e0!3m2!1siw!2sil!4v1712667578413!5m2!1siw!2sil"
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
