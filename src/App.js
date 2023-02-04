import "./App.css";
import Input from "./components/Input";
import Post from "./components/PostDefault";
import { useSelector } from "react-redux";

function App() {
  const postList = useSelector((state) => state.data);
  return (
    <div className="App">
      <h1>Create your own post</h1>
      <Input />
      <div className="displayPosts">
        {postList.map((item) => (
          <Post
            text={item.text}
            link={item.link}
            id={item.id}
            nickname={item.nickname}
            nickImg={item.nickImg}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
