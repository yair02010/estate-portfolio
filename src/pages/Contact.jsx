    import { useRef, useState } from "react";
    import { Container, Form, Button, Row, Col, Modal } from "react-bootstrap";
    import emailjs from "@emailjs/browser";
    import key from "../assets/key.jpg";
    import { FaPaperPlane } from "react-icons/fa";

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
        <section
        className="py-5"
        style={{
            background: "linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)",
            minHeight: "100vh",
        }}
        >
        <Container>
            <Row className="g-5 align-items-center">
            <Col md={6} className="text-center">
                <img
                src={key}
                alt="מפתח לבית"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "500px", objectFit: "cover" }}
                />
            </Col>

            <Col md={6}>
                <div
                className="p-5 rounded-4 shadow-lg border"
                style={{ backgroundColor: "#ffffff" }}
                >
                <h2 className="fw-bold text-primary mb-4 text-center">
                    צרו קשר – אנחנו כאן בשבילכם
                </h2>

                <Form ref={formRef} onSubmit={sendEmail}>
                    <Row className="g-4">
                    <Col sm={6}>
                        <Form.Group controlId="formName">
                        <Form.Label>שם מלא</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="לדוגמה: יוסי כהן"
                            required
                        />
                        </Form.Group>
                    </Col>

                    <Col sm={6}>
                        <Form.Group controlId="formEmail">
                        <Form.Label>אימייל</Form.Label>
                        <Form.Control
                            type="email"
                            name="from_email"
                            placeholder="your@email.com"
                            required
                        />
                        </Form.Group>
                    </Col>

                    <Col sm={12}>
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
                    </Col>

                    <Col sm={12} className="text-center">
                        <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        className="d-inline-flex align-items-center gap-2 px-5 py-2"
                        >
                        <FaPaperPlane /> שלח הודעה
                        </Button>
                    </Col>
                    </Row>
                </Form>
                </div>
            </Col>
            </Row>

            {/* פופ-אפ הודעה */}
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