import React from "react";

const initialState = {
  data: [
    {
      nickname: "karatusia",
      id: 1,
      text: "замучили ті джава сквірти,хотю спать.",
      link: "https://d16u9y6cg00afk.cloudfront.net/CatInFish/6168738.512.webp",
      nickImg:
        "https://d16u9y6cg00afk.cloudfront.net/mofu_cats_first/40402.512.webp",
    },
    {
      nickname: "winchyk",
      id: 2,
      text: "котяча жопа",
      link: "https://cdn.shopify.com/s/files/1/0531/8397/1526/products/41f577bf898c0accd61fde4ecac0f169_grande.jpg?v=1626117210",
      nickImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdq_16q9h9Cs2CtKj8rPBzGuqlZ_JmYIXtWg&usqp=CAU",
    },
  ],
};

const reducer = (state = initialState, action) => {
  console.log(state.data);
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DELETE_POST":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
