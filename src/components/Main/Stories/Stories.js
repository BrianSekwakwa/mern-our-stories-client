import React, { Component } from "react";
import { Card, CardColumns, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import "./Stories.css";
import {
  fetchAllStories,
  fetchStory,
  clearStoryState,
} from "../../../actions/storyActions";

export class Stories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { fetchAllStories } = this.props;
    fetchAllStories();
  }

  onHandleClick = (id) => {
    const { fetchStory, clearStoryState } = this.props;
    clearStoryState();
    fetchStory(id);
  };

  stories = () => {
    const { stories } = this.props;

    if (stories && stories.length > 0) {
      return (
        <CardColumns className="cards-container">
          {stories.map((card) => {
            return (
              <Link style={{ color: "inherit" }} to="/story" key={card._id}>
                <Card
                  onClick={() => this.onHandleClick(card._id)}
                  className="card-styles"
                >
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title style={{ marginBottom: 0 }}>
                      {card.title}
                    </Card.Title>
                    <Card.Text
                      as="small"
                      style={{
                        color: "rgb(153, 153, 153)",
                        fontWeight: "bold",
                      }}
                    >
                      {card.creator}
                    </Card.Text>
                    <Card.Text
                      as="small"
                      style={{
                        marginLeft: "0.5rem",
                        fontWeight: "bold",
                        color: "rgb(153, 153, 153)",
                      }}
                    >
                      &#8211;
                    </Card.Text>
                    <Card.Text
                      as="small"
                      style={{
                        color: "rgb(153, 153, 153)",
                        marginLeft: "0.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {moment(card.createdAt).format("DD MMM YYYY")}
                    </Card.Text>
                    <Card.Text
                      style={{ marginTop: "1rem", fontWeight: "bold" }}
                    >
                      <span>
                        <i className="fas fa-thumbs-up"></i>
                        {` ${card.likeCount}`}
                      </span>
                      <span>
                        <i className="fas fa-thumbs-down"></i>
                        {` ${card.dislikeCount}`}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </CardColumns>
      );
    } else if (stories && stories.length <= 0) {
      return (
        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "1.2rem",
          }}
        >
          There are no stories to be read.{" "}
          <Link to="/create">Create a new story!</Link>
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
    return (
      <div className="stories-container">
        <h1>Stories</h1>
        {this.stories()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.storyReducer.stories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllStories: () => {
      dispatch(fetchAllStories());
    },
    fetchStory: (id) => {
      dispatch(fetchStory(id));
    },
    clearStoryState: () => {
      dispatch(clearStoryState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
