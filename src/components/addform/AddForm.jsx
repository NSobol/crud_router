import React, { useState } from "react";

function AddForm(props) {
  const [inputValue, setInputValue] = useState("");
  const { handleAdd } = props;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    handleAdd(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>New Post</h1>
      <div>
        <textarea
          onChange={handleChange}
          rows="7"
          cols="50"
          value={inputValue}
        />
        <button className="send">Опубликовать</button>
      </div>
    </form>
  );
}

export default AddForm;
