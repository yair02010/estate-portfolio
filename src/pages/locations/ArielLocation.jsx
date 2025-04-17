    // src/pages/locations/ArielLocation.jsx
    import { Container, Row, Col, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";

    export default function ArielLocation() {
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
            <h1 className="display-4 fw-bold">אריאל – לב השומרון, לב ההשקעה</h1>
            <p className="lead">
                קרקעות לבנייה רוויה ואזור תעשייה מתפתח – הכל במקום אחד.
            </p>
            </Container>
        </div>

        <section className="py-5">
            <Container>
            <Row className="g-5">
                <Col md={6}>
                <h2 className="fw-bold text-primary mb-3">למה להשקיע באריאל?</h2>
                <p className="fs-5 text-muted">
                    אריאל היא העיר המרכזית בשומרון, עם מוסדות אקדמיים, תשתיות
                    מתקדמות ואזור תעשייה בצמיחה. מדובר במוקד כלכלי ואסטרטגי המשלב
                    בין מגורים, מסחר, ותעשייה מתקדמת.
                </p>
                <p className="fs-5 text-muted">
                    הנכסים המשווקים כוללים מגרש ענק לבנייה רוויה של 110 דונם וטאבו
                    פרטי, וכן 40 דונם באזור התעשייה הישן עם תב"ע לתעשייה ולוגיסטיקה –
                    הזדמנות נדירה במרכז הארץ.
                </p>
                <ul className="fs-5">
                    <li>✅ קרקע פרטית בטאבו</li>
                    <li>✅ שימושים מגוונים: מגורים, מסחר, תעשייה</li>
                    <li>✅ תב"ע בתוקף</li>
                </ul>
                <Link to="/properties">
                    <Button variant="primary" size="lg" className="mt-3">
                    לצפייה בנכסים
                    </Button>
                </Link>
                </Col>
                <Col md={6}>
                <iframe
                    title="מפת אריאל"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.2111205866645!2d35.180891975491!3d32.10692431742343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d31795e4a3ff9%3A0xa305c1223f06493c!2z15TXldek15zXmdeZ!5e0!3m2!1siw!2sil!4v1712670232421!5m2!1siw!2sil"
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
