import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

export default function Map(){
    
    const [address, setAddress] = useState("Budapest");

    const handleSubmit = (event: any): void => {
        event.preventDefault();
        setAddress(encodeURIComponent(event.target.elements.address.value));
    }

    let mapUrl: string =
     `https://maps.googleapis.com/maps/api/staticmap?center=${address}
     &format=png&zoom=16&size=640x640&scale=2
     &markers=color:blue%7C${address}
     &key=${process.env.REACT_APP_API_KEY_MAPS}`;

     return (
        <Container >
            <Card border={"dark"} bg={"info"} className="mb-2">
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Card.Title>Search address</Card.Title>
                <Card.Body className="mb-3">
                <Form.Control id={"address"} type={"text"} placeholder={"Enter address"} />
                </Card.Body>
                <Card.Footer>
                <Button type={"submit"} variant={"primary"}>Search</Button>
                </Card.Footer>
            </Form>
            </Card>
            <Card border={"light"} className="mt-2">
                <Card.Img src={`${mapUrl}`} />
            </Card>

        </Container>

     )
};