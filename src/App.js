import React from 'react'
import Name from './Name'
import Price from './Price'
import Description from './Description'
import Image from './Image'
import { Card } from 'react-bootstrap'

const myName = "ONAOLA";

const App = () => {
  
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Description />
          <Price />
        </Card.Body>
      </Card>
      <h1>Hello,{myName}</h1>
    </div>

  );
}

export default App