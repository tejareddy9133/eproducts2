import React, { useState } from "react";
const Form = () => {
  const [userName, setuName] = useState("");
  const [arr, setArr] = useState([]);

  return (
    <div>
      <h1>User Details</h1>
      <br />
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(e) => {
            setuName(e.target.value);
            console.log(e);
          }}
          value={userName}
          placeholder="Enter Your Name"
        />
        <button onClick={() => setArr([...arr, userName])}>click</button>
      </div>
      <br />
      <div>
        {arr.map((el, ind) => (
          <h1>{el}</h1>
        ))}
      </div>
    </div>
  );
};

export default Form;
