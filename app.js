const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World"
);

const title = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child",
      },
      [
        React.createElement("h1", {}, "Hello World h1"),
        React.createElement("h2", {}, "Hello World h2"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "Hello World h1"),
        React.createElement("h2", {}, "Hello World h2"),
      ]
    ),
  ]
);

root.render(title);
