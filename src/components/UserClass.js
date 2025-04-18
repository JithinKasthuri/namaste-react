import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + " Child Constructor is called");
  }

  componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount is called");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + " Child Render is called");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: 1234567890</h2>
      </div>
    );
  }
}

export default UserClass;
