import { Card } from "react-bootstrap";
import { product } from "./Product";

const Name =()=>{
    return (
      <div>
        <Card.Title>{product.name}</Card.Title>
      </div>
    );
}
export default Name;