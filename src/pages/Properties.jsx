    import { Container, Row, Col } from "react-bootstrap";
    import PropertyCard from "../components/PropertyCard";
    import { properties } from "../data/properties";
    import bannerImage from "../assets/forsale.png";
    import "../styles/properties.css";

    export default function Properties() {
    return (
        <>
        {/* באנר עליון */}
        <div
            className="properties-banner"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <h1 className="properties-banner-title">נכסים בבלעדיות</h1>
        </div>

        {/* אזור הכרטיסים */}
        <section className="properties-section">
            <Container>
            <div className="properties-intro">
                <h2 className="fw-bold text-primary display-6">הזדמנויות נדל"ן</h2>
                <p className="text-muted fs-5">
                נכסים נדירים שנבחרו בקפידה – זמינים ללקוחות בבלעדיות
                </p>
            </div>

            <Row xs={1} sm={2} md={3} className="g-4 mt-4">
                {properties.map((property) => (
                <Col key={property.id}>
                    <PropertyCard property={property} />
                </Col>
                ))}
            </Row>
            </Container>
        </section>
        </>
    );
    }
