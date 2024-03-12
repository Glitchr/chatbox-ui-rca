import { Card, Form, Button } from "react-bootstrap"

export default function Input() {
  return (
    <Card className="p-3 m-2">
      <Form id="answer">
        <Form.Group controlId="formInput" className="mb-3">
          <Form.Label className="sr-only">Input</Form.Label>
          <Form.Control
            type="text"
            placeholder="What do you need?"
            className="no-border" // Add custom styling for the bottom border
          />
        </Form.Group>
      </Form>
      <Card.Footer>
        <Button className="justify-content-end" variant="primary" type="submit">
          Submit
        </Button>
      </Card.Footer>
    </Card>
  );
}