    // src/pages/Home.jsx
    import { Container, Row, Col, Button, Card } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import { FaRegHandshake, FaLandmark, FaMapMarkedAlt, FaStar, FaWhatsapp } from "react-icons/fa";
    import grandmaImage from "../assets/logo.png";
    import back1 from "../assets/back2.jpg";
    import digitalImage from "../assets/vila.jpg";
    import { properties } from "../data/properties";
    import "../styles/home.css";

    export default function Home() {
    const featured = properties.slice(0, 3);

    return (
        <div dir="rtl">
        {/* HERO */}
        <div className="home-hero" style={{ backgroundImage: `url(${back1})` }}>
            <div className="home-hero-content">
            <img src={grandmaImage} alt="רות הלפגוט" className="home-hero-logo" />
            <h1 className="home-hero-title">2000 יוסף מקרקעין</h1>
            <p className="home-hero-description">
                חברת נדל״ן המתמחה בקרקעות פרטיות בבלעדיות, עם ניהול אישי של המנכ״לית רות הלפגוט –
                יועצת נדל״ן בכירה עם ניסיון של למעלה מ־20 שנה בעולם המקרקעין בישראל.
            </p>
            <div className="home-button-group">
                <Link to="/properties">
                <Button size="lg" variant="light">צפה בנכסים</Button>
                </Link>
                <Link to="/contact">
                <Button size="lg" variant="outline-light">צור קשר</Button>
                </Link>
            </div>
            </div>
        </div>

        {/* WHY US */}
        <section className="py-5 bg-light why-us-section">
            <Container>
            <h2 className="text-center text-primary fw-bold mb-5">למה לבחור ב-2000 יוסף מקרקעין?</h2>
            <Row className="g-4 text-center justify-content-center">
                <Col xs={12} md={4}>
                <FaMapMarkedAlt size={40} className="mb-3 text-primary" />
                <h5>קרקעות בטאבו</h5>
                <p>התמקדות בקרקעות פרטיות בלבד עם רישום מלא בטאבו ובעלות משפטית ברורה.</p>
                </Col>
                <Col xs={12} md={4}>
                <FaLandmark size={40} className="mb-3 text-primary" />
                <h5>תב״ע מאושרת</h5>
                <p>כל הנכסים כוללים תב״ע תקפה ומעודכנת – מוכנים לבנייה מיידית.</p>
                </Col>
                <Col xs={12} md={4}>
                <FaRegHandshake size={40} className="mb-3 text-primary" />
                <h5>שירות אישי ומקצועי</h5>
                <p>ליווי מקצועי מתחילת הדרך ועד סיום העסקה – עם שקיפות, זמינות ואמינות מלאה.</p>
                </Col>
            </Row>
            </Container>
        </section>

        {/* MARKETING */}
        <section className="py-5" style={{ backgroundColor: "#f3f7fb" }}>
            <Container>
            <Row className="align-items-center g-4">
                <Col md={6}>
                <img src={digitalImage} alt="שיווק דיגיטלי" className="img-fluid rounded shadow" />
                </Col>
                <Col md={6}>
                <h3 className="fw-bold text-primary mb-3">שיווק דיגיטלי מתקדם</h3>
                <p className="lead">
                    החברה משווקת כל נכס בפלטפורמות המובילות – בפייסבוק, אינסטגרם ולוחות נדל״ן נבחרים.
                    כל שיווק נעשה במקצועיות, עם תוכן איכותי וחשיפה רחבה ומדויקת לקהל רלוונטי.
                </p>
                </Col>
            </Row>
            </Container>
        </section>

        {/* STATS */}
        <section className="py-5 text-white" style={{ backgroundColor: "#0D1B2A" }}>
            <Container>
            <Row className="text-center">
                <Col xs={6} md={3}><h1 className="display-4 fw-bold">+20</h1><p>שנות ניסיון</p></Col>
                <Col xs={6} md={3}><h1 className="display-4 fw-bold">+70</h1><p>נכסים בבלעדיות</p></Col>
                <Col xs={6} md={3}><h1 className="display-4 fw-bold">100%</h1><p>שקיפות משפטית</p></Col>
                <Col xs={6} md={3}><h1 className="display-4 fw-bold">∞</h1><p>מחויבות ללקוח</p></Col>
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

        {/* CTA */}
        <section className="py-5 bg-dark text-white" style={{ marginBottom: 0 }}>
            <Container className="text-center">
            <h3 className="fw-bold mb-3">מחפשים השקעה חכמה ובטוחה?</h3>
            <p className="lead">דברו איתנו בוואטסאפ – ייעוץ ראשוני וללא התחייבות.</p>
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
