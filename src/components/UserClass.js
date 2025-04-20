import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
    console.log(this.props.username + " Child Constructor is called");
  }

  async componentDidMount() {
    console.log(this.props.username + " Child Component Did Mount is called");
    const data = await fetch(
      "https://api.github.com/users/" + this.props.username
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.username + " Component Did Update");
  }

  componentWillUnmount() {
    console.log(this.props.username + " Component Will Unmount");
  }

  render() {
    const { username } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.username + " Child Render is called");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: 1234567890</h2>
      </div>
    );
  }
}

export default UserClass;
