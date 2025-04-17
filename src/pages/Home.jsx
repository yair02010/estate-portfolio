    import { Container, Row, Col, Button, Card } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import { FaRegHandshake, FaLandmark, FaMapMarkedAlt, FaStar, FaWhatsapp } from "react-icons/fa";
    import grandmaImage from "../assets/page3.jpg";
    import back1 from "../assets/back2.jpg";
    import digitalImage from "../assets/vila.jpg";
    import { properties } from "../data/properties";

    export default function Home() {
    const featured = properties.slice(0, 3);

    return (
        <div dir="rtl">
        {/* HERO */}
        <div
            style={{
            backgroundImage: `url(${back1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "120px 20px",
            color: "#fff",
            position: "relative",
            }}
        >
            <div style={{ backgroundColor: "rgba(0,0,0,0.6)", position: "absolute", inset: 0 }} />
            <Container style={{ position: "relative", zIndex: 1 }} className="text-center">
            <img
                src={grandmaImage}
                alt="סבתא"
                className="rounded-circle shadow mb-4"
                style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                border: "4px solid white",
                }}
            />
            <h1 className="fw-bold display-5">נדל״ן בבלעדיות עם ליווי אישי</h1>
            <p className="lead text-white-50 mt-3 mx-auto" style={{ maxWidth: "700px" }}>
                קרקעות בטאבו, תב״ע מאושרת וליווי אישי – מאשת מקצוע עם ניסיון של עשרות שנים.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <Link to="/properties">
                <Button size="lg" variant="light">צפה בנכסים</Button>
                </Link>
                <Link to="/contact">
                <Button size="lg" variant="outline-light">צור קשר</Button>
                </Link>
            </div>
            </Container>
        </div>

        {/* WHY WORK WITH ME */}
        <section className="py-5 bg-light">
            <Container>
            <h2 className="text-center text-primary fw-bold mb-5">למה לעבוד איתי?</h2>
            <Row className="g-4 text-center">
                <Col md={4}>
                <FaMapMarkedAlt size={40} className="mb-3 text-primary" />
                <h5>טאבו פרטי בלבד</h5>
                <p>רק קרקעות פרטיות עם רישום מלא בטאבו ובעלות משפטית ברורה.</p>
                </Col>
                <Col md={4}>
                <FaLandmark size={40} className="mb-3 text-primary" />
                <h5>תב״ע מאושרת</h5>
                <p>כל הנכסים כוללים תב״ע בתוקף – מוכן לבנייה.</p>
                </Col>
                <Col md={4}>
                <FaRegHandshake size={40} className="mb-3 text-primary" />
                <h5>יחס אישי</h5>
                <p>ליווי צמוד מהשיחה הראשונה ועד החתימה – בלי לחץ, עם לב גדול.</p>
                </Col>
            </Row>
            </Container>
        </section>

        {/* DIGITAL MARKETING SECTION */}
        <section className="py-5" style={{ backgroundColor: "#f3f7fb" }}>
            <Container>
            <Row className="align-items-center g-4">
                <Col md={6}>
                <img
                    src={digitalImage}
                    alt="שיווק דיגיטלי"
                    className="img-fluid rounded shadow"
                />
                </Col>
                <Col md={6}>
                <h3 className="fw-bold text-primary mb-3">שיווק דיגיטלי חכם</h3>
                <p className="lead">
                    כל נכס מקבל חשיפה ממוקדת בפלטפורמות הדיגיטליות – פייסבוק, אינסטגרם ולוחות פרסום,
                    תוך מתן דגש על יחס אישי, אמינות ודיוק במידע.
                </p>
                </Col>
            </Row>
            </Container>
        </section>

        {/* STATS */}
        <section className="py-5 text-white" style={{ backgroundColor: "#0D1B2A" }}>
            <Container>
            <Row className="text-center">
                <Col md={3}><h1 className="display-4 fw-bold">20+</h1><p>שנות ניסיון</p></Col>
                <Col md={3}><h1 className="display-4 fw-bold">70+</h1><p>נכסים בבלעדיות</p></Col>
                <Col md={3}><h1 className="display-4 fw-bold">100%</h1><p>שקיפות משפטית</p></Col>
                <Col md={3}><h1 className="display-4 fw-bold">∞</h1><p>מסירות</p></Col>
            </Row>
            </Container>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
            <Container>
            <h2 className="text-center fw-bold text-primary mb-4">לקוחות מספרים</h2>
            <Row className="g-4">
                {[{
                name: "דוד לוי",
                quote: "היא מצאה לנו קרקע מושלמת. חמה, חדה ומנוסה.",
                }, {
                name: "תמר כהן",
                quote: "הייתה לי חוויה אישית ומקצועית במיוחד. מומלצת בחום!",
                }, {
                name: "יוסי בן דוד",
                quote: "הפכה תהליך מסובך לפשוט. תודה ענקית.",
                }].map((t, i) => (
                <Col md={4} key={i}>
                    <Card className="h-100 shadow-sm border-0 rounded-4">
                    <Card.Body>
                        <FaStar className="text-warning mb-2" />
                        <Card.Text className="testimonial fst-italic">"{t.quote}"</Card.Text>
                        <Card.Subtitle className="text-muted mt-3">– {t.name}</Card.Subtitle>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>
        </section>

        {/* FEATURED PROPERTIES */}
        <section className="py-5" style={{ backgroundColor: "#eaf1f8" }}>
            <Container>
            <h2 className="text-center fw-bold text-primary mb-4">נכסים בולטים</h2>
            <Row className="g-4">
                {featured.map((property) => (
                <Col md={4} key={property.id}>
                    <Card className="h-100 shadow-sm border-0 rounded-4">
                    <Card.Img
                        variant="top"
                        src={property.image}
                        alt={property.title}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title className="fw-semibold">{property.title}</Card.Title>
                        <Card.Text className="text-muted">
                        📍 {property.location} <br />
                        💰 ₪{property.price.toLocaleString()}
                        </Card.Text>
                        <Link to={`/properties/${property.id}`}>
                        <Button variant="primary" size="sm">צפה</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                <Link to="/properties">
                <Button variant="outline-primary" size="lg">לצפייה בכל הנכסים</Button>
                </Link>
            </div>
            </Container>
        </section>

        {/* CTA ללא פוטר */}
        <section className="py-5 bg-dark text-white" style={{ marginBottom: 0 }}>
            <Container className="text-center">
            <h3 className="fw-bold mb-3">מחפשים השקעה אמיתית?</h3>
            <p className="lead">בואו נדבר בוואטסאפ – בלי לחץ, רק מענה מקצועי.</p>
            <a
                href="https://wa.me/972544977076"
                className="btn btn-success btn-lg d-inline-flex align-items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp /> שלחו הודעה
            </a>
            </Container>
        </section>
        </div>
    );
    }
