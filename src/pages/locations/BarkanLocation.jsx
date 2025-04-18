    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import "../../styles/barkan.css";

    export default function BarkanLocation() {
    return (
        <div dir="rtl" className="barkan-page">
        <header className="barkan-hero">
            <Container>
            <h1 className="barkan-title">ברקן – יישוב קהילתי איכותי</h1>
            <p className="barkan-subtitle">
                מגוון מגרשים בטאבו פרטי עם תב"ע מאושרת – לבנייה פרטית או השקעה.
            </p>
            </Container>
        </header>

        <section className="barkan-content py-5">
            <Container>
            <Row className="g-5 align-items-center">
                <Col md={6}>
                <h2 className="barkan-section-title">על ברקן</h2>
                <p className="barkan-paragraph">
                    ברקן הוא יישוב שקט ומבוקש בצפון מערב השומרון, המציע איכות חיים גבוהה,
                    חינוך מצוין, וקהילה מגובשת. היישוב מתאפיין בבנייה פרטית וצמודת קרקע,
                    עם קרקעות בטאבו מלא ותב"ע מאושרת.
                </p>
                <p className="barkan-paragraph">
                    אנו מציעים שני מתחמים: 8 מגרשים של 500 מ"ר ו-60 מגרשים של 330 מ"ר –
                    שניהם כוללים פיתוח מלא ומוכנים לבנייה.
                </p>
                <ul className="barkan-list">
                    <li>✅ טאבו פרטי ותב"ע מאושרת</li>
                    <li>✅ תשתיות קיימות ופיתוח כלול</li>
                    <li>✅ נוף פתוח ואווירה פסטורלית</li>
                </ul>
                <Link to="/properties">
                    <Button variant="primary" size="lg" className="mt-3">
                    לצפייה בנכסים
                    </Button>
                </Link>
                </Col>

                <Col md={6}>
                <div className="barkan-map-wrapper">
                    <iframe
                    title="מפת ברקן"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.2796147918843!2d35.06017627549157!3d32.15733231371202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d2f66d1eb2bcb%3A0xc61283d1576fa721!2z15TXkNeR15zXnCDXl9eV16jXmdeZ150!5e0!3m2!1siw!2sil!4v1712668134220!5m2!1siw!2sil"
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
