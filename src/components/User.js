import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Bangalore</h2>
      <h2>Contact: 1234567890</h2>
    </div>
  );
};

export default User;
