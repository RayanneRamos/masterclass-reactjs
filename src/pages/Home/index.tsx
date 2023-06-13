import { Tweet } from "../../components/Tweet";
import { Sidebar } from "../../components/Sidebar";
import "./styles.css";
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";

export function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />
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
          <Separator />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  );
}
