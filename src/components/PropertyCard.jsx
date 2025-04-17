    import { Card, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";

    export default function PropertyCard({ property }) {
    return (
        <Card className="h-100 shadow-sm border-0">
        {/* תמונה בגובה אחיד */}
        <div
            style={{
            height: "200px",
            overflow: "hidden",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem"
            }}
        >
            <Card.Img
            src={property.image}
            alt={property.title}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover" // אפשר גם contain אם יש לוגואים
            }}
            />
        </div>

        {/* תוכן הכרטיס */}
        <Card.Body className="d-flex flex-column">
            <Card.Title className="text-primary fw-bold fs-6">
            {property.title}
            </Card.Title>

            <ul className="list-unstyled text-muted small mb-3">
            <li>📍 {property.location}</li>
            <li>📐 {property.size.toLocaleString()} מ"ר</li>
            <li>💰 ₪{property.price.toLocaleString()}</li>
            <li>📝 {property.status}</li>
            </ul>

            <Link to={`/properties/${property.id}`} className="mt-auto">
            <Button variant="dark" size="sm" className="w-100">
                לפרטים נוספים
            </Button>
            </Link>
        </Card.Body>
        </Card>
    );
    }
