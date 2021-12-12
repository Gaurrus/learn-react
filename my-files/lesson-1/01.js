"use strict";

const e = React.createElement;

const LikeButton = () => {
  const [state, setState] = React.useState({ liked: false });

  if (state.liked) {
    return "You liked this.";
  }

  return (
    <button onClick={() => this.setState({ liked: true })}>Like</button>
  );
};

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(LikeButton), domContainer);
