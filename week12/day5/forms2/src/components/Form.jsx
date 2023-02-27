import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(5);
  //console.log(name)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setList([...list, name]);

    console.log(list);
  };
  console.log(list);

  const handleClick = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      {list.map((item) => {
        return <p key={item}>{item}</p>;
      })}

      <input type="text" />
      <button onClick={(e) => handleClick(e)}>Click</button>
      <p>{counter}</p>
    </div>
  );
};
export default Form;
