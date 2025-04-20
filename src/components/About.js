import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <UserClass name={"First"} location={"Bangalore"} />
//       <UserClass name={"Second"} location={"Chennai"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor is called");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount is called");
  }

  render() {
    console.log("Parent Render is called");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass username={"JithinKasthuri"} />
      </div>
    );
  }
}

export default About;
