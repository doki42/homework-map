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
     &format=png&zoom=14&size=640x640
     &markers=color:blue%7C${address}
     &key=${process.env.REACT_APP_API_KEY_MAPS}`;

     return (
        <Container>
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Label>Search address</Form.Label>
                <Form.Control id={"address"} type={"text"} placeholder={"Enter address"} />
                <Button type={"submit"}>Search</Button>
            </Form>
            <Card>
                <Card.Img src={`${mapUrl}`} width={"640px"} height={"640px"} />
            </Card>

        </Container>

     )
};