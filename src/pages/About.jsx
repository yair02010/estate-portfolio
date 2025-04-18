import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import grandmaImage from "../assets/page2.jpg"; // התמונה שלך
import "../styles/about.css";

export default function About() {
    return (
        <section className="py-5 about-section">
            <Container>
                <Row className="align-items-center g-5 flex-md-row flex-column-reverse">
                    <Col md={6}>
                        <div className="about-image-wrapper text-center">
                            <img
                                src={grandmaImage}
                                alt="רות הלפגוט - מנכ״לית החברה"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto",
                                    borderRadius: "1rem",
                                    boxShadow: "0 0.4rem 1rem rgba(0, 0, 0, 0.1)",
                                }}
                            />
                        </div>
                    </Col>

                    <Col md={6}>
                        <h2 className="text-primary fw-bold mb-4 display-5 about-heading">
                            על החברה
                        </h2>
                        <p className="fs-5 text-secondary">
                            חברת <strong>2000 יוסף מקרקעין</strong> הוקמה מתוך חזון פשוט וברור:
                            להפוך את עולם ההשקעות בנדל״ן לפשוט, בטוח ונגיש – עם ליווי אישי ושקיפות מלאה.
                        </p>
                        <p className="fs-5 text-secondary">
                            בראש החברה עומדת <strong>רות הלפגוט</strong>, יועצת נדל״ן בכירה עם ניסיון של למעלה מ־20 שנה,
                            מומחית באיתור קרקעות פרטיות בטאבו, תב"עות מאושרות, ובליווי עסקאות מקרקעין מורכבות.
                        </p>
                        <p className="fs-5 text-secondary">
                            אנו מתמחים בשיווק קרקעות בבלעדיות – תוך שמירה על אמינות, מקצועיות ושירות בגובה העיניים.
                            כל עסקה נבחנת לעומק, מלווה משפטית, ומותאמת אישית לצורכי הלקוח.
                        </p>

                        <Link to="/contact">
                            <Button
                                variant="primary"
                                size="lg"
                                className="rounded-pill px-4 py-2 fw-semibold mt-3"
                            >
                                📞 צרו קשר עם החברה
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
