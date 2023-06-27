import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Question, QuestionsForm, questionsFormSchema } from "../schemas";

function useQuestions() {
  const [questions, SetQuestions] = useState<Question[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<QuestionsForm>({
    resolver: zodResolver(questionsFormSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        inputText: "",
        outputText: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const createQuestion = (data: Question) => {
    SetQuestions((prev) => [...prev, data]);
  };
  const deleteQuestion = (id: Question["id"]) => {
    SetQuestions((prev) => prev.filter((question) => question.id !== id));
  };
  const cleanQuestions = () => {
    SetQuestions([]);
    reset({
      inputText: "",
      outputText: "",
    });
  };
  return {
    questions,
    createQuestion,
    deleteQuestion,
    cleanQuestions,
    registerQuestionInput: register,
    handleSubmitQuestion: handleSubmit,
    questionsFormErrors: errors,
  };
}

export default useQuestions;
