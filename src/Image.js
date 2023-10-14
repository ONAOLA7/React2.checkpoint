import { Card } from "react-bootstrap";
import { product } from "./Product";

const Image = ()=> {
    return (
      <div>
        <Card.Img variant="top" src={product.image} />
      </div>
    );
}

export default Image;