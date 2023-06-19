import classes from "./styles/App.module.css";
import useChatBotForm, { ACTIONS } from "./hooks/useChatBotForm";
import { useState } from "react";
import Input from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import Chat from "./components/Chat/Chat";
import Modal from "./components/Modal/Modal";
function App() {
  const [isTested, setIsTested] = useState(false);
  const {
    state: { chatbotName, modelContext, modelExamples, currentExample },
    dispatch,
    handleCreateChatBot,
    handleCreateExampleQuestion,
    handleDeleteExample,
  } = useChatBotForm();

  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      <header>
        <h1>Customize your chatbot</h1>
      </header>
      <section>
        <form className="">
          <Input
            value={chatbotName}
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_CHATBOT_NAME,
                payload: e.target.value,
              })
            }
            type="text"
            name="chatbotName"
            id="chatbotName"
            placeholder="My awesome chatbot..."
            label="Chatbot Name"
            showLabel={true}
          />

          <label htmlFor="chatbotContext">Chatbot Context</label>
          <textarea
            value={modelContext}
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_MODEL_CONTEXT,
                payload: e.target.value,
              })
            }
            name="chatbotContext"
            id="chatbotContext"
            placeholder="Pretend you are an astronaut..."
          />
          <h2>Example Q&A's</h2>
          <article className={classes['examples-container']}>
            <div className={classes['examples-inputs-container']}>
              <Input
                type="text"
                name="chatbotExamplesQuestion"
                id="chatbotExamples"
                value={currentExample.inputText}
                placeholder="What is your name?"
                onChange={(e) =>
                  dispatch({
                    type: ACTIONS.SET_CURRENT_EXAMPLE_QUESTION,
                    payload: e.target.value,
                  })
                }
                label="Question:"
                showLabel={true}
              />

              <Input
                type="text"
                name="chatbotExamplesAnswer"
                id="chatbotResponse"
                value={currentExample.outputText}
                placeholder="My name is..."
                onChange={(e) =>
                  dispatch({
                    type: ACTIONS.SET_CURRENT_EXAMPLE_ANSWER,
                    payload: e.target.value,
                  })
                }
                label="Answer:"
                showLabel={true}
              />
              <Button
                label="Add Example"
                onClick={handleCreateExampleQuestion}
                size="lg"
                color='base'
              />
            </div>
            <div className={classes['loaded-examples-container']}>
              <ul className={classes['examples-list']}>
                <h3>Loaded Examples</h3>
                {modelExamples.map((example) => {
                  return (
                    <li className={classes.example} key={example.id}>
                      <Button
                        label="&times;"
                        onClick={() => handleDeleteExample(example.id)}
                        className={classes['delete-button']}
                      />

                      <p className={classes['example-text']}>Q: {example.inputText}</p>
                      <p className={classes['example-text']}>A: {example.outputText}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </form>
        <div className={classes['buttons-container']}>
          <Button
            label="Test your Chatbot"
            onClick={() => {
              setIsTested(true);
              SetIsOpen((prev) => !prev);
            }}
            size="lg"
            color='primary'
          />
          <Button
            disabled={!isTested}
            onClick={(e) => {
              setIsTested(false);
              handleCreateChatBot(e);
            }}
            label="Create ChatBot!"
            size="lg"
            color="secondary"
          />
        </div>
        <Modal isOpen={isOpen} onClose={() => SetIsOpen(false)}>
          <h2>Test your Bot</h2>
          <Chat
            chatbotName={chatbotName}
            modelContext={modelContext}
            modelExamples={modelExamples}
          />
        </Modal>
      </section>
    </>
  );
}
export default App;
