import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";
import "./FormStyles.css";

export class EditStory extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      creator: "",
      story: "",
      image: "",
    };
  }
  onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };
  render() {
    return (
      <div className="form-container">
        <h2 className="form-header">Edit Your Story</h2>
        <Form>
          {/* Creator */}
          <Form.Group controlId="formCreator">
            <Form.Label>Creator</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the author of the story"
              required
              name="creator"
              onChange={this.onChangeField}
            />
          </Form.Group>
          {/* Title */}
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title of the story"
              required
              name="title"
              onChange={this.onChangeField}
            />
          </Form.Group>
          {/* Story Body */}
          <Form.Group controlId="formStory">
            <Form.Label>Story</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              required
              style={{ minHeight: "200px" }}
              placeholder="Tell us your story :)"
              name="story"
              onChange={this.onChangeField}
            />
          </Form.Group>
          {/* Image */}
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                this.setState({
                  image: base64,
                });
              }}
            />
            <Form.Text>We recommned an image of the size 1200 X 720</Form.Text>
          </Form.Group>
          {/* Handler Buttons */}
          <Button variant="primary" type="submit" onClick={this.onHandleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditStory;
