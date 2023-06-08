import './styles/App.css';
import {db} from './firestore';
import { addDoc, collection} from "firebase/firestore";
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
    await addDoc(chatbotCollectionRef, {
      chatbotName:chatbotName,
      modelContext: chatbotContext,
      modelExamples: chatbotExamplesList
    });
    setChatbotExamplesList([]);
    setChatbotName('');
    setChatbotContext('');
    
  }
  return (
    <>
      <header>
        <h1>Customize your chatbot</h1>
      </header>
        <section>
          <form className="form" onSubmit={handleCreateChatBot}>
            <label htmlFor="chatbotName">Chatbot Name</label>
            <input value={chatbotName} onChange={(e)=> setChatbotName(e.target.value)} type="text" name="chatbotName" id="chatbotName" />

            <label htmlFor="chatbotContext">Chatbot Context</label>
            <textarea value={chatbotContext} onChange={(e)=> setChatbotContext(e.target.value)} name="chatbotContext" id="chatbotContext" />
            <h2>Example Q&A's</h2>
            <article className="examples-container">
              <div className="examples-inputs-container">

              <label htmlFor="chatbotExamplesQuestion">Question:</label>
              <input
                type="text"
                name="chatbotExamplesQuestion"
                id="chatbotExamples"
                value={chatbotQuestion}
                onChange={(e)=> setChatbotQuestion(e.target.value)}
              />

              <label htmlFor="chatbotExamplesAnswer">Answer:</label>
              <input
                type="text"
                name="chatbotExamplesAnswer"
                id="chatbotResponse"
                value={chatbotResponse}
                onChange={(e)=> setChatbotResponse(e.target.value)}
              />
              <button onClick={handleCreateExampleQuestion}>Load Example</button>
              </div>
              <div className="loaded-examples-container">
                <h3>Loaded Examples</h3>
                <ul>
                  {chatbotExamplesList.map((example, index) => {
                    return (
                      <li key={index}>
                        <p>{example.inputText}</p>
                        <p>{example.outputText}</p>
                      </li>
                    )
                  }
                  )}
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