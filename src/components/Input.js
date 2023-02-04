import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions";

const Input = () => {
  const [inputName, setInputName] = useState("");
  const [inputLink, setInputLink] = useState("");

  const [selectValue, setSelectValue] = useState("karatusia");
  const nickImage = {
    karatusia: {
      img: "https://d16u9y6cg00afk.cloudfront.net/mofu_cats_first/40402.512.webp",
    },
    winchyk: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdq_16q9h9Cs2CtKj8rPBzGuqlZ_JmYIXtWg&usqp=CAU",
    },
  };
  const photoNick = nickImage[selectValue].img;

  const addNewPost = () => {
    dispatch(
      addPost({
        text: inputName,
        link: inputLink,
        id: Date.now(),
        nickname: selectValue,
        nickImg: photoNick,
      })
    );
  };

  const dispatch = useDispatch();

  return (
    <form>
      <select
        className="select"
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        <option>karatusia</option>
        <option>winchyk</option>
      </select>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="name"
        className="input-name"
      ></input>
      <input
        type="text"
        value={inputLink}
        onChange={(e) => setInputLink(e.target.value)}
        placeholder="image link"
        className="input-link"
      ></input>
      <button type="button" onClick={addNewPost} className="btn-add">
        Add
      </button>
    </form>
  );
};

export default Input;
