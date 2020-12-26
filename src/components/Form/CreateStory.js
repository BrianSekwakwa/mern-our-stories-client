import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";
import "./FormStyles.css";
import { createStory } from "../../actions/storyActions";

export class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      creator: "",
      story: "",
      image: "",
    };
  }
  onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const { title, creator, image, story } = this.state;

    if (title && creator && image && story !== "") {
      const { createStory } = this.props;
      createStory(this.state);
      window.location = "/";
    } else {
      alert("Cannot submit form with empty fields");
    }
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="form-header">Create A Story</h2>
        <Form>
          {/* Creator */}
          <Form.Group controlId="formCreator">
            <Form.Label>Creator</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the author of the story"
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

const mapDispatchToProps = (dispatch) => {
  return {
    createStory: (story) => {
      dispatch(createStory(story));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateStory);
