import { Button, Form, Tab, Tabs } from "react-bootstrap";
import { useState, ChangeEvent } from "react";
import { postData } from "../services/openai";

function Content() {
  const [text, setText] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  const handleClick = () => {
    console.log(text);
    postData(text);
  }

  return (
    <Tabs defaultActiveKey="home" className="ml-2 custom-tab mb-3">
      <Tab eventKey="home" title="Home" className="">
        <Button onClick={handleClick}>Submit</Button>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Type something..."
          />
        </Form.Group>
        <p>{text}</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Profile tab content</p>
      </Tab>
    </Tabs>
  );
}

export default Content;
