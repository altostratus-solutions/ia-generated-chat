import examplesStyles from "./styles/Example.module.css";
import AppStyles from "./styles/App.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Chat from "./components/Chat/Chat";
import Modal from "./components/Modal/Modal";
import ExamplesList from "./components/Questions/QuestionsList";
import Form from "./components/Form/Form";

import useQuestions from "./hooks/useQuestions";
import useChatBotForm from "./hooks/useChatBotForm";
import TextArea from "./components/TextArea/TextArea";

function App() {
  const [isTested, setIsTested] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);

  const {
    registerChatBotInput,
    handleSubmitChatBot,
    chatBotFormErrors,
    chatBotFormControl,
    getChatBotFormValues,
    createChatBot,
  } = useChatBotForm();

  const {
    questions,
    createQuestion,
    deleteQuestion,
    cleanQuestions,
    registerQuestionInput,
    handleSubmitQuestion,
    questionsFormErrors,
  } = useQuestions();
  return (
    <>
      <header>
        <h1>Customize your chatbot</h1>
      </header>
      <section>
        <Form
          id="chatbot-form"
          onSubmit={handleSubmitChatBot(async (data) => {
            await createChatBot({
              chatbotName: data.chatbotName,
              modelContext: data.modelContext,
              modelExamples: questions,
            }).then(() => cleanQuestions());
          })}
        >
          <Input
            {...registerChatBotInput("chatbotName")}
            type="text"
            placeholder="My awesome chatbot..."
            label="Chatbot Name:"
            error={chatBotFormErrors.chatbotName?.message}
          />

          <TextArea
            label={"Context:"}
            error={chatBotFormErrors.modelContext?.message}
            control={chatBotFormControl}
            name="modelContext"
          />
        </Form>
        <h2>Example Q&A's</h2>
        <article className={examplesStyles["examples-container"]}>
          <Form
            onSubmit={handleSubmitQuestion((data) => {
              createQuestion({ ...data, id: uuidv4() });
            })}
            className={examplesStyles["examples-inputs-container"]}
          >
            <Input
              {...registerQuestionInput("inputText")}
              error={questionsFormErrors.inputText?.message}
              type="text"
              placeholder="What is your name?"
              label="Question:"
              showLabel={true}
            />

            <Input
              {...registerQuestionInput("outputText")}
              error={questionsFormErrors.outputText?.message}
              type="text"
              placeholder="My name is..."
              label="Answer:"
            />
            <Button label="Add Example" size="lg" color="base" type="submit" />
          </Form>
          <ExamplesList questions={questions} onDelete={deleteQuestion} />
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
          form="chatbot-form"
          disabled={!isTested}
          label="Create ChatBot!"
          size="lg"
          color="secondary"
        />
      </div>
      <Modal isOpen={isOpen} onClose={() => SetIsOpen(false)}>
        <h2>Test your Bot</h2>
        <Chat
          chatbotName={getChatBotFormValues("chatbotName")}
          modelContext={getChatBotFormValues("modelContext")}
          modelExamples={questions}
        />
      </Modal>
    </>
  );
}
export default App;