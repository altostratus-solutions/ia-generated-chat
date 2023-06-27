import { addDoc, collection } from "firebase/firestore";
import {ChatBotData, ChatBotForm, chatBotFormSchema } from "../schemas";
import { CHATBOT_COLLECTION, db } from "../firestore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

function useChatBotForm() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors,isSubmitSuccessful },
  } = useForm<ChatBotForm>({
    resolver: zodResolver(chatBotFormSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        chatbotName: "",
        modelContext: "",
      })
    }
  }, [isSubmitSuccessful, reset])
  const createChatBot = async ({
    chatbotName,
    modelContext,
    modelExamples,
  }:ChatBotData) => {
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