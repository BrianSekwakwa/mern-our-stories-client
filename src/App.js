import "./App.css";
import { connect } from "react-redux";
import { fetchAll } from "./actions/storyActions";

function App(props) {
  const onButtonClick = () => {
    props.fetchAll();
  };

  return (
    <div className="App">
      <button onClick={onButtonClick}>Click Me</button>
      <h2>State Count: {props.count}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.storyReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => {
      dispatch(fetchAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
