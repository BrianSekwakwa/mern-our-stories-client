import React, { Component } from "react";
import { Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Stories.css";
import { fetchAllStories } from "../../../actions/storyActions";

export class Stories extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          title: "Brian",
          imgString: "",
          body: "Some string over here",
        },
        {
          id: 2,
          title: "Brian",
          imgString: "",
          body: "Some string over here",
        },
        {
          id: 3,
          title: "Brian",
          imgString: "",
          body: "Some string over here",
        },
        {
          id: 4,
          title: "Brian",
          imgString: "",
          body: "Some string over here",
        },
        {
          id: 5,
          title: "Brian",
          imgString: "",
          body: "Some string over here",
        },
        {
          id: 6,
          title: "Brian",
          imgString: "",
          body: "Some string over here",
        },
        {
          id: 7,
          title: "Brian",
          imgString: "",
          body: "Some string over here",
        },
      ],
    };
  }

  componentDidMount() {
    const { fetchAllStories } = this.props;
    fetchAllStories();
  }

  componentDidUpdate() {
    console.log(this.props.stories);
  }

  render() {
    return (
      <div className="stories-container">
        <h2>Stories</h2>
        <CardColumns className="cards-container">
          {this.state.data.map((card) => {
            return (
              <Link style={{ color: "inherit" }} to="/story" key={card.id}>
                <Card onClick={this.onHandleClick} className="card-styles">
                  <Card.Img variant="top" src={card.imgString} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                      <span>Likes: 0</span>
                      <span>Dislikes: 0</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </CardColumns>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
