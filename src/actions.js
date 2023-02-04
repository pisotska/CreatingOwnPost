export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

export const addPost = (newPost) => {
  return { type: ADD_POST, payload: newPost };
};

export const deletePost = (id) => {
  return { type: DELETE_POST, payload: id };
};
