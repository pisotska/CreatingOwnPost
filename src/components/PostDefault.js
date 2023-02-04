import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deletePost } from "../actions";

function Post(props) {
  const dispatch = useDispatch();

  const [like, setLike] = useState(15);
  const [isLike, setIsLike] = useState(false);
  const [dislike, setDislike] = useState(0);
  const [isDislike, setIsDislike] = useState(false);
  const [send, setSend] = useState(5);
  const [isSend, setIsSend] = useState(false);

  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };
  const onDislikeButtonClick = () => {
    setDislike(dislike + (dislike ? -1 : 1));
    setIsDislike(!isDislike);
  };
  const onSendButtonClick = () => {
    setSend(send + (send ? -1 : 1));
    setIsSend(!isSend);
  };

  return (
    <div className="post_container">
      <div className="header_container">
        <img className="photo" src={props.nickImg} />
        <div className="header_nick">{props.nickname}</div>
        <button
          type="button"
          onClick={() => dispatch(deletePost(props.id))}
          className="btn-delete"
        >
          X
        </button>
      </div>
      <div className="content_container">
        <div className="content_text">{props.text}</div>
        <img className="photo1" src={props.link} />
      </div>

      <div className="foter_container">
        <span className="icon">
          <i class="fa fa-thumbs-up" onClick={onLikeButtonClick}>
            <span className="like">{like}</span>
          </i>
        </span>
        <span className="icon">
          <i class="fa fa-thumbs-down" onClick={onDislikeButtonClick}>
            <span className="like">{dislike}</span>
          </i>
        </span>
        <span className="icon">
          <i class="fa fa-mail-forward" onClick={onSendButtonClick}>
            <span className="like">{send}</span>
          </i>
        </span>
        <span className="icon">
          <i class="fa fa-cloud-download"></i>
        </span>
      </div>
    </div>
  );
}

export default Post;
