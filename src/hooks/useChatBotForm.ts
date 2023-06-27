import { addDoc, collection } from "firebase/firestore";
import {ChatBotForm, chatBotFromSchema } from "../schemas";
import { CHATBOT_COLLECTION, db } from "../firestore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function useChatBotForm() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<ChatBotForm>({
    resolver: zodResolver(chatBotFromSchema),
  });
  const createChatBot = async ({
    chatbotName,
    modelContext,
    modelExamples,
  }:ChatBotForm) => {
    if (
      chatbotName === "" ||
      modelContext === "" ||
      modelExamples.length === 0
    )
      return;
    try {
      const chatbotCollectionRef = collection(db, CHATBOT_COLLECTION);
      await addDoc(chatbotCollectionRef, {
        chatbotName: chatbotName,
        modelContext: modelContext,
        modelExamples: modelExamples,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return {
    registerChatBotInput: register,
    handleSubmitChatBot: handleSubmit,
    chatBotFormErrors: errors,
    chatBotFormControl: control,
    getChatBotFormValues: getValues,
    createChatBot,
  }
}

export default useChatBotForm