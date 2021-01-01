import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import "./Story.css";
import {
  updateLikeCount,
  updateDislikeCount,
  deleteStory,
  clearState,
} from "../../../../actions/storyActions";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickCount = (countOption, id, count) => {
    const { updateLikes, updateDislikes } = this.props;
    const newCount = count + 1;

    if (countOption === "like") {
      updateLikes(id, { likeCount: newCount });
    } else if (countOption === "dislike") {
      updateDislikes(id, { dislikeCount: newCount });
    }
  };

  onClickDelete = (id) => {
    const { deleteStory, clearState } = this.props;
    clearState();
    deleteStory(id);
    window.location = "/";
  };

  renderedComponent = () => {
    const { story } = this.props;
    if (story) {
      const styleObject = {
        background: `url(${story.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "70vh",
      };
      return (
        <div className="story-styles">
          <div style={styleObject}></div>
          <div className="details">
            <h1>{story.title}</h1>
            <h4>{story.creator}</h4>
            <small>
              created at{" "}
              {moment(story.createdAt).format("HH:mm:ss, DD MMM YYYY")}
            </small>
            <small>
              modified at{" "}
              {moment(story.updatedAt).format("HH:mm:ss, DD MMM YYYY")}
            </small>
            <div className="body">{story.story}</div>
            <div className="buttons">
              <i
                onClick={() =>
                  this.onClickCount("like", story._id, story.likeCount)
                }
                className="fas fa-thumbs-up fa-lg like"
              >
                {" "}
                {story.likeCount}
              </i>
              <i
                onClick={() =>
                  this.onClickCount("dislike", story._id, story.dislikeCount)
                }
                className="fas fa-thumbs-down fa-lg dislike"
              >
                {" "}
                {story.dislikeCount}
              </i>
              <Link to="/edit">
                <Button variant="primary" className="edit-button">
                  EDIT
                </Button>
              </Link>
              <Button
                onClick={() => this.onClickDelete(story._id)}
                variant="danger"
              >
                DELETE
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Spinner animation="border" />
      </div>
    );
  };
  render() {
    return <div className="story-container">{this.renderedComponent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.storyReducer.story,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLikes: (id, likeObj) => {
      dispatch(updateLikeCount(id, likeObj));
    },
    updateDislikes: (id, disLikeObj) => {
      dispatch(updateDislikeCount(id, disLikeObj));
    },
    deleteStory: (id) => {
      dispatch(deleteStory(id));
    },
    clearState: () => {
      dispatch(clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Story);
