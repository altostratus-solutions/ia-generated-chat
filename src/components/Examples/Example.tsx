import { InputOutputTextPair } from "../../models";
import { Button } from "../Button/Button";
import classes from "../../styles/Example.module.css";
type ExampleProps = {
  example: InputOutputTextPair;
  onDelete: (id: string) => void;
};
function Example({ example, onDelete }: ExampleProps) {
  return (
    <li className={classes.example} key={example.id}>
      <Button
        label="&times;"
        onClick={() => onDelete(example.id)}
        className={classes["delete-button"]}
      />

      <p className={classes["example-text"]}>Q: {example.inputText}</p>
      <p className={classes["example-text"]}>A: {example.outputText}</p>
    </li>
  );
}

export default Example;
