    import { Container, Row, Col, Card, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import barkanImg2 from "../../assets/barkan2.jpeg";
    import roshahin from "../../assets/roshahain2.png";
    import oranit from "../../assets/oranit1.png";
    import beitel from "../../assets/bitel2.png";
    import ariel from "../../assets/arial2.png";
    import jerushalem from "../../assets/jerushalem2.png";

    export default function Locations() {
    const locations = [
        {
        id: "barkan",
        name: "ברקן",
        description: '8 מגרשים של 500 מ"ר + 60 מגרשים של 330 מ"ר – טאבו ותב"ע מאושרת.',
        image: barkanImg2
        },
        {
        id: "oranit",
        name: "אורנית",
        description: '300 דונם פרטיים עם חלוקה למגרשים בני 330 מ"ר – עם תב"ע מלאה.',
        image: oranit
        },
        {
        id: "ariel",
        name: "אריאל",
        description: 'קרקעות לבנייה רוויה + אזור תעשייה 40 דונם לתעשייה ולוגיסטיקה.',
        image: ariel
        },
        {
        id: "beitel",
        name: "בית אל",
        description: '60 דונם קרקע פרטית + 6 דונם לבנייה רוויה – מיקום מעולה.',
        image: beitel
        },
        {
        id: "jerusalem",
        name: "ירושלים",
        description: '950 מ"ר בנוי בשלוש קומות בצמוד לכותל – נדל"ן נדיר במיקום הקדוש בעולם.',
        image: jerushalem
        }
    ];

    return (
        <div dir="rtl">
        <section className="py-5" style={{ backgroundColor: "#f4f6f9" }}>
            <Container>
            <div className="text-center mb-5">
                <h2 className="fw-bold text-primary display-5">אזורים בהם אנו פועלים</h2>
                <p className="text-muted fs-5">בחרו אזור כדי לצפות בפרטים והזדמנויות השקעה</p>
            </div>

            <Row className="g-4">
                {locations.map((loc) => (
                <Col md={6} lg={4} key={loc.id}>
                    <Card className="shadow border-0 h-100">
                    <div style={{ height: "250px", backgroundColor: "#fff", padding: "10px" }}>
                        <Card.Img
                        variant="top"
                        src={loc.image}
                        alt={loc.name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        }}
                        />
                    </div>
                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="fs-4 fw-bold">{loc.name}</Card.Title>
                        <Card.Text className="flex-grow-1">{loc.description}</Card.Text>
                        <Link to={`/locations/${loc.id}`}>
                        <Button variant="primary" size="md">
                            מידע נוסף
                        </Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>
        </section>
        </div>
    );
    }
