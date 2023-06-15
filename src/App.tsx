import "./styles/App.css";
import useChatBotForm, { ACTIONS } from "./hooks/useChatBotForm";
import ChatModal from "./components/ChatModal";
import { useState } from "react";
import Input from "./components/Input/Input";
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
        <form className="form">
          <Input
          value={chatbotName}
          className="chatbot-name-input"
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
          <article className="examples-container">
            <div className="examples-inputs-container">
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
              <button onClick={handleCreateExampleQuestion}>
                Load Example
              </button>
            </div>
            <div className="loaded-examples-container">
              <ul className="examples-list">
                <h3>Loaded Examples</h3>
                {modelExamples.map((example) => {
                  return (
                    <li className="example" key={example.id}>
                      <button
                        onClick={() => handleDeleteExample(example.id)}
                        className="delete-button"
                      >
                        &times;
                      </button>
                      <p className="example-text">Q: {example.inputText}</p>
                      <p className="example-text">A: {example.outputText}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </form>
        <div className="buttons-container">
        <button
          className="open-modal-button"
          onClick={() => {
            setIsTested(true);
            SetIsOpen((prev) => !prev);
          }}
        >
          Test your Chatbot
        </button>
        <button
          disabled={!isTested}
          onClick={(e) => {
            setIsTested(false);
            handleCreateChatBot(e);
          }}
        >
          Create ChatBot!
        </button>
        </div>
        <ChatModal
          chatbotName={chatbotName}
          modelContext={modelContext}
          modelExamples={modelExamples}
          isOpen={isOpen}
          onClose={() => {
            SetIsOpen((prev) => !prev);
          }}
        />
      </section>
    </>
  );
}
export default App;
