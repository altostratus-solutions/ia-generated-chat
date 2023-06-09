import "./styles/App.css";
import useChatBotForm, { ACTIONS } from "./hooks/useChatBotForm";
function App() {
  const {
    state: { chatbotName, modelContext, modelExamples, currentExample },
    dispatch,
    handleCreateChatBot,
    handleCreateExampleQuestion,
  } = useChatBotForm();
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
              <h3>Loaded Examples</h3>
              <ul>
                {modelExamples.map((example, index) => {
                  return (
                    <li key={index}>
                      <p>{example.inputText}</p>
                      <p>{example.outputText}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
          <button type="submit">Create ChatBot!</button>
        </form>
      </section>
    </>
  );
}
export default App;
