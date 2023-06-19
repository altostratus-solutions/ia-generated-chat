import { InputOutputTextPair } from "../../models";
import classes from "../../styles/Example.module.css";
import Example from "./Example";
type ExamplesListProps = {
  modelExamples: InputOutputTextPair[];
  onDelete: (id: string) => void;
};
function ExamplesList({modelExamples,onDelete}:ExamplesListProps) {
  return (
    <div className={classes['loaded-examples-container']}>
              <ul className={classes['examples-list']}>
                <h3>Loaded Examples</h3>
                {modelExamples.map((example) => <Example key={example.id} example={example} onDelete={onDelete} />)}
              </ul>
            </div>
  )
}

export default ExamplesList