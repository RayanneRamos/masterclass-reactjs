import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import "./styles.css";

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />
      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/RayanneRamos.png" alt="Rayanne Ramos" />
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
  );
}