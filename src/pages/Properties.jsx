    import { Container, Row, Col } from "react-bootstrap";
    import PropertyCard from "../components/PropertyCard";
    import { properties } from "../data/properties";
    import bannerImage from "../assets/forsale.png";

    export default function Properties() {
    return (
        <>
        {/* באנר עליון */}
        <div
            style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textShadow: "1px 1px 6px rgba(0,0,0,0.7)"
            }}
        >
            <h1 className="display-4 fw-bold">נכסים בבלעדיות</h1>
        </div>

        {/* כרטיסי נכסים */}
        <section className="py-5" style={{ backgroundColor: "#f4f6f9" }}>
            <Container>
            <div className="text-center mb-5">
                <h2 className="fw-bold text-primary display-6">הזדמנויות נדל"ן</h2>
                <p className="text-muted fs-5">
                נכסים נדירים שנבחרו בקפידה – זמינים ללקוחות בבלעדיות
                </p>
            </div>

            <Row xs={1} sm={2} md={3} className="g-4">
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
