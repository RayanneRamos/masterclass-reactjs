import { Sparkle } from "phosphor-react";
import "./styles.css";
import { Tweet } from "../../components/Tweet";
import { Sidebar } from "../../components/Sidebar";

export function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/RayanneRamos.png"
                alt="Rayanne Ramos"
              />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>
          <div className="separator" />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  );
}
