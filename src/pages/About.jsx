    import { Container, Row, Col, Button, Card } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import grandmaImage from "../assets/page2.jpg";
    export default function About() {
    return (
        <section className="py-5 about-section">
        <Container>
            <Row className="align-items-center g-5 flex-md-row flex-column-reverse">
            <Col md={6}>
                <div className="about-image-wrapper">
                <Card className="shadow border-0 rounded-4 overflow-hidden">
                    <Card.Img
                    variant="top"
                    src={grandmaImage}
                    alt="סבתא שלנו"
                    className="about-image"
                    />
                </Card>
                </div>
            </Col>

            <Col md={6}>
                <h2 className="text-primary fw-bold mb-4 display-5 about-heading">
                קצת עליי
                </h2>
                <p className="fs-5 text-secondary">
                ברוכים הבאים! אני יועצת נדל"ן המתמחה בשיווק נכסי קרקע בבלעדיות – בין אם מדובר במגרשים פרטיים או שטחים מסחריים.
                עם ניסיון של למעלה מ־20 שנה, אני מחוברת לעולם הקרקעות כמו משפחה.
                </p>
                <p className="fs-5 text-secondary">
                אני פועלת מתוך שליחות ואמון אישי: למצוא עבור הלקוחות שלי את ההזדמנויות הנכונות ביותר, עם תב"ע מסודרת ובעלות פרטית אמיתית.
                </p>
                <p className="fs-5 text-secondary">
                כל עסקה מלווה בגישה אישית, שקיפות מלאה וליווי צמוד עד להשלמתה – כי עבורי זה לא רק נדל"ן, זו שליחות.
                </p>

                <Link to="/contact">
                <Button
                    variant="primary"
                    size="lg"
                    className="rounded-pill px-4 py-2 fw-semibold mt-3"
                >
                    📞 דברו איתי
                </Button>
                </Link>
            </Col>
            </Row>
        </Container>
        </section>
    );
    }
