import { Card } from "react-bootstrap";
import { product } from "./Product";

const Price = () => {
   return (
     <Card.Text>
       {product.price}
     </Card.Text>
   );
}

export default Price;