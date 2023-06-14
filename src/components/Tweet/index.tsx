import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./styles.css";

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/RayanneRamos.png" alt="Rayanne Ramos" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Rayanne Ramos</strong>
          <span>@RaayanneRamos</span>
        </div>
        <p>{content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
