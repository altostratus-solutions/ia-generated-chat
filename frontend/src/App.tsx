import { useState } from 'react';
import { InputOutputTextPair } from './models';
function App() {
  const [chatbotName, setChatbotName] = useState<string>('');
  const [chatbotContext, setChatbotContext] = useState<string>('');
  
  const [chatbotQuestion, setChatbotQuestion] = useState<string>('');
  const [chatbotResponse, setChatbotResponse] = useState<string>('');

  const [chatbotExamplesList, setChatbotExamplesList] = useState<InputOutputTextPair[]>([]);

  const handleCreateExampleQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newExample: InputOutputTextPair = {
      inputText: chatbotQuestion,
      outputText: chatbotResponse
    }
    setChatbotExamplesList([...chatbotExamplesList, newExample]);
    setChatbotQuestion('');
    setChatbotResponse(''); 
  }
  const handleCreateChatBot = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const chatbotCollectionRef = collection(db, "Test");
    const chatbotDoc = await addDoc(chatbotCollectionRef, {
      name: chatbotName,
      context: chatbotContext,
      examples: chatbotExamplesList
    });
    console.log("Document written with ID: ", chatbotDoc.id);
  }
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
