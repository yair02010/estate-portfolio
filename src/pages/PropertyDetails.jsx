    import { useParams } from "react-router-dom";
    import { Container, Row, Col, Button, Modal } from "react-bootstrap";
    import { useState, useEffect } from "react";
    import { properties } from "../data/properties";
    import PropertyCard from "../components/PropertyCard";
    import Slider from "react-slick";
    import "../styles/propditi.css";

    export default function PropertyDetails() {
    const { id } = useParams();
    const property = properties.find((prop) => prop.id === id);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (property && property.location === "ברקן") {
        setShowModal(true);
        }
    }, [property]);

    if (!property) {
        return (
        <Container className="my-5">
            <h2 className="text-center text-danger">הנכס לא נמצא</h2>
        </Container>
        );
    }

    const relatedProperties = properties
        .filter((p) => p.location === property.location && p.id !== property.id)
        .slice(0, 3);

    const images = property.images || (property.image ? [property.image] : []);
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
        {/* פופאפ על קבוצת רכישה */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
            <Modal.Title>💡 מידע חשוב על הנכס</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            הנכס בברקן משווק במסגרת <strong>קבוצת רכישה</strong> הכוללת מספר משקיעים.
            מדובר באפשרות מצוינת להשקעה משותפת במחיר אטרקטיבי.
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={() => setShowModal(false)}>
                הבנתי
            </Button>
            </Modal.Footer>
        </Modal>

        <section className="py-5" style={{ backgroundColor: "#f9fafc" }}>
            <Container className="mb-5">
            <Row className="g-5 align-items-start">
                <Col md={6}>
                <div className="property-image-container">
                    <Slider {...sliderSettings}>
                    {images.map((img, idx) => (
                        <img
                        key={idx}
                        src={img}
                        alt={`property-img-${idx}`}
                        className="img-fluid rounded"
                        style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                        />
                    ))}
                    </Slider>
                </div>
                </Col>

                <Col md={6} className="property-details-container">
                <h2 className="text-primary fw-bold mb-3">{property.title}</h2>
                <ul className="list-unstyled fs-5">
                    <li>
                    <strong>📍 מיקום:</strong> {property.location}
                    </li>
                    <li>
                    <strong>📐 גודל:</strong> {property.size.toLocaleString()} מ"ר
                    </li>
                    {property.units && (
                    <li>
                        <strong>🏘️ יחידות:</strong> {property.units}
                    </li>
                    )}
                    <li>
                    <strong>💰 מחיר:</strong>{" "}
                    {typeof property.price === "number"
                        ? `₪${property.price.toLocaleString()}`
                        : property.price}
                    </li>
                    <li>
                    <strong>📝 סטטוס:</strong> {property.status}
                    </li>
                </ul>

                <div className="property-buttons d-flex flex-column gap-3 mt-4">
                    <Button
                    variant="success"
                    size="lg"
                    className="px-4 rounded-pill fw-semibold"
                    href="https://wa.me/972501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    📱 דברו איתנו בוואטסאפ
                    </Button>

                    <Button
                    variant="outline-primary"
                    size="lg"
                    className="px-4 rounded-pill fw-semibold"
                    onClick={() =>
                        navigator.share &&
                        navigator.share({
                        title: property.title,
                        text: `בדקו את הנכס: ${property.title}`,
                        url: window.location.href,
                        })
                    }
                    >
                    🔗 שתפו את הנכס
                    </Button>
                </div>
                </Col>
            </Row>

            {/* מפה - עכשיו בסוף אחרי התוכן */}
            <div className="property-map mt-5">
                <iframe
                title="Google Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    property.location
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0, borderRadius: "12px" }}
                ></iframe>
            </div>
            </Container>
        </section>

        {relatedProperties.length > 0 && (
            <section className="py-5 bg-light">
            <Container>
                <h3 className="text-center fw-bold text-primary mb-4">נכסים דומים</h3>
                <Row xs={1} sm={2} md={3} className="g-4">
                {relatedProperties.map((prop) => (
                    <Col key={prop.id}>
                    <PropertyCard property={prop} />
                    </Col>
                ))}
                </Row>
            </Container>
            </section>
        )}
        </>
    );
    }
