    import { Card, Button } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import Slider from "react-slick";

    export default function PropertyCard({ property }) {
    const hasSlider = Array.isArray(property.images) && property.images.length > 0;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Card className="h-100 shadow-sm border-0">
        <div
            style={{
            width: "100%",
            aspectRatio: "4 / 3",
            overflow: "hidden",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            backgroundColor: "#f8f9fa"
            }}
        >
            {hasSlider ? (
            <Slider {...sliderSettings}>
                {property.images.map((img, idx) => (
                <div
                    key={idx}
                    style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                    }}
                >
                    <img
                    src={img}
                    alt={`slide-${idx}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    }}
                    />
                </div>
                ))}
            </Slider>
            ) : (
            <div
                style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
                }}
            >
                <img
                src={property.image}
                alt={property.title}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }}
                />
            </div>
            )}
        </div>

        <Card.Body className="d-flex flex-column">
            <Card.Title className="text-primary fw-bold fs-6">{property.title}</Card.Title>

            <ul className="list-unstyled text-muted small mb-3">
            <li>📍 {property.location}</li>
            <li>📐 {property.size.toLocaleString()} מ"ר</li>
            <li>
                💰{" "}
                {typeof property.price === "number"
                ? `₪${property.price.toLocaleString()}`
                : property.price}
            </li>
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
