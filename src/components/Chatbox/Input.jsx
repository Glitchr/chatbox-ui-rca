import { Card, Form, Button } from "react-bootstrap"
import { PiPaperclip } from "react-icons/pi";
import { PiMicrophone } from "react-icons/pi";

export default function Input() {
  return (
    <Card className="input-box shadow-border pt-3 ps-3 pe-3 pb-1 m-2 mt-4">
      <Form id="answer">
        <Form.Group controlId="formInput" className="mb-3">
          <Form.Label className="visually-hidden">Input</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="What do you need?"
            className="no-border"
            style={{ 
              whiteSpace: "normal",
              resize: "none",
            }}
          />
        </Form.Group>
      </Form>
      <Card.Footer>
        <PiMicrophone className="icons align-self-center me-2" />
        <PiPaperclip className="icons align-self-center me-2" />
        <Button className="justify-content-end purple-button" type="submit" size="sm">
          Send message
        </Button>
      </Card.Footer>
    </Card>
  );
}