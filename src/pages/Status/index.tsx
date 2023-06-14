import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import "./styles.css";

export function Status() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido",
    "Parabéns pelo progresso.",
  ]);

  function createNewAnswers(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswers, ...answers]);
    setNewAnswers("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers]);
      setNewAnswers("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a maiores totam, quaerat repellendus qui ipsa impedit saepe modi tempora nisi voluptas vitae cupiditate minima excepturi nobis itaque non! Culpa." />
      <Separator />
      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/RayanneRamos.png" alt="Rayanne Ramos" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswers(event.target.value)}
          />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
