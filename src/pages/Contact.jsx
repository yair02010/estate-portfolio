    import { useRef, useState } from "react";
    import { Container, Form, Button, Row, Col, Modal } from "react-bootstrap";
    import emailjs from "@emailjs/browser";
    import key from "../assets/key.jpg";
    import { FaPaperPlane } from "react-icons/fa";
    import "../styles/contact.css";

    export default function Contact() {
    const formRef = useRef();
    const [modalShow, setModalShow] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalVariant, setModalVariant] = useState("success");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_2ebdjo6",
            "template_aiyv4kn",
            formRef.current,
            "gdgD5yzK5K8ZQqQiK"
        )
        .then(() => {
            setModalMessage("ההודעה נשלחה בהצלחה! ✉️");
            setModalVariant("success");
            setModalShow(true);
            formRef.current.reset();
        })
        .catch((err) => {
            console.error("EmailJS Error:", err);
            setModalMessage("שליחת ההודעה נכשלה. נסה שוב.");
            setModalVariant("danger");
            setModalShow(true);
        });
    };

    return (
        <section className="contact-section">
        <Container>
            <Row className="g-5 align-items-center">
            <Col md={6} className="text-center">
                <img
                src={key}
                alt="מפתח לבית"
                className="contact-image"
                />
            </Col>

            <Col md={6}>
                <div className="contact-form-wrapper">
                <h2 className="contact-title">צרו קשר – אנחנו כאן בשבילכם</h2>

                <Form ref={formRef} onSubmit={sendEmail} className="contact-form">
                    <Form.Group controlId="formName">
                    <Form.Label>שם מלא</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="לדוגמה: יוסי כהן"
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                    <Form.Label>אימייל</Form.Label>
                    <Form.Control
                        type="email"
                        name="from_email"
                        placeholder="your@email.com"
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                    <Form.Label>הודעה</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="איך נוכל לעזור לכם?"
                        required
                    />
                    </Form.Group>

                    <div className="text-center mt-4">
                    <Button type="submit" className="contact-button">
                        <FaPaperPlane /> שלח הודעה
                    </Button>
                    </div>
                </Form>
                </div>
            </Col>
            </Row>

            {/* פופאפ */}
            <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            centered
            backdrop="static"
            >
            <Modal.Header closeButton className={`bg-${modalVariant} text-white`}>
                <Modal.Title>
                {modalVariant === "success" ? "✔️ ההודעה נשלחה" : "❌ שגיאה"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <p className="mb-0">{modalMessage}</p>
            </Modal.Body>
            </Modal>
        </Container>
        </section>
    );
    }
