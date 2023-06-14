import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import "./styles.css";

const answers = [
  "Concordo...",
  "Olha, faz sentido",
  "Parabéns pelo progresso.",
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a maiores totam, quaerat repellendus qui ipsa impedit saepe modi tempora nisi voluptas vitae cupiditate minima excepturi nobis itaque non! Culpa." />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/RayanneRamos.png" alt="Rayanne Ramos" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
