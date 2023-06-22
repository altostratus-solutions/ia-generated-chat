import examplesStyles from "./styles/Example.module.css";
import AppStyles from "./styles/App.module.css";

import useChatBotForm, { ACTIONS } from "./hooks/useChatBotForm";
import { useState } from "react";
import Input from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import Chat from "./components/Chat/Chat";
import Modal from "./components/Modal/Modal";
import ExamplesList from "./components/Examples/ExamplesList";
import Form from "./components/Form/Form";
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
        <Form>
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
        </Form>
        <h2>Example Q&A's</h2>
        <article className={examplesStyles["examples-container"]}>
          <Form className={examplesStyles["examples-inputs-container"]}>
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
              color="base"
            />
          </Form>
          <ExamplesList
            modelExamples={modelExamples}
            onDelete={handleDeleteExample}
          />
        </article>
      </section>
      <div className={AppStyles["buttons-container"]}>
        <Button
          label="Test your Chatbot"
          onClick={() => {
            setIsTested(true);
            SetIsOpen((prev) => !prev);
          }}
          size="lg"
          color="primary"
        />
        <Button
          disabled={!isTested}
          onClick={(e) => {
            setIsTested(false);
            handleCreateChatBot(e).then(() => console.log("Chatbot created"));
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
    </>
  );
}
export default App;
