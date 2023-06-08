import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Customize your chatbot</h1>
      </header>
        <section>
          <form className="form" action="">
            <label htmlFor="chatbotName">Chatbot Name</label>
            <input type="text" name="chatbotName" id="chatbotName" />

            <label htmlFor="chatbotContext">Chatbot Context</label>
            <textarea name="chatbotContext" id="chatbotContext" />
            <h2>Example Q&A's</h2>
            <article className="examples-container">
              <div className="examples-inputs-container">

              <label htmlFor="chatbotExamplesQuestion">Question:</label>
              <input
                type="text"
                name="chatbotExamplesQuestion"
                id="chatbotExamples"
              />

              <label htmlFor="chatbotExamplesAnswer">Answer:</label>
              <input
                type="text"
                name="chatbotExamplesAnswer"
                id="chatbotResponse"
              />
              <button>Load Example</button>
              </div>
              <div className="loaded-examples-container">
                <h3>Loaded Examples</h3>
              </div>

            </article>
            <button type="submit">Create ChatBot!</button>
          </form>
        </section>
    </>
  );
}
export default App;
