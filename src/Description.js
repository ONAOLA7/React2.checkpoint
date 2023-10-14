import { Card } from "react-bootstrap";
import { product } from "./Product";

const Description = () => {
  return (
    <Card.Text>
      {product.description}
    </Card.Text>
  );
};
export default Description;
