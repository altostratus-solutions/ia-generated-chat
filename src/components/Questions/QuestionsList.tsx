import { Question } from "../../schemas";
import classes from "../../styles/Example.module.css";
import Example from "./Question";
type ExamplesListProps = {
  questions: Question[];
  onDelete: (id: string) => void;
};
function ExamplesList({ questions, onDelete }: ExamplesListProps) {
  return (
    <div className={classes["loaded-examples-container"]}>
      <ul className={classes["examples-list"]}>
        <h3>Loaded Examples</h3>
        {questions.map((question) => (
          <Example key={question.id} example={question} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default ExamplesList;
