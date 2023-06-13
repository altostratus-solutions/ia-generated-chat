import "./styles/App.css";
import useChatBotForm, { ACTIONS } from "./hooks/useChatBotForm";
import ChatModal from "./components/ChatModal";
import { useState } from "react";
function App() {
  const {
    state: { chatbotName, modelContext, modelExamples, currentExample },
    dispatch,
    handleCreateChatBot,
    handleCreateExampleQuestion,
    handleDeleteExample
  } = useChatBotForm();

  const [isOpen,SetIsOpen] = useState(false);
  return (
    <>
      <header>
        <h1>Customize your chatbot</h1>
      </header>
      <section>
        <form className="form" onSubmit={handleCreateChatBot}>
          <label htmlFor="chatbotName">Chatbot Name</label>
          <input
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
              <label htmlFor="chatbotExamplesQuestion">Question:</label>
              <input
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
              />

              <label htmlFor="chatbotExamplesAnswer">Answer:</label>
              <input
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
                       <button onClick={()=> handleDeleteExample(example.id)} className="delete-button">&times;</button>
                       <p className="example-text">Q: {example.inputText}</p>
                       <p className="example-text">A: {example.outputText}</p>
                    </li>

                  );
                })}
              </ul>
            </div>
          </article>
          <button type="submit">Create ChatBot!</button>
        </form>
        <button className="open-modal-button" onClick={() => {SetIsOpen(prev => !prev)}}>Test your Chatbot</button>
        <ChatModal isOpen={isOpen} onClose={() => {SetIsOpen(prev => !prev)}} />
      </section>
    </>
  );
}
export default App;
