import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Question, QuestionsForm, questionsFormSchema } from "../schemas";

function useQuestions() {
  const [questions, SetQuestions] = useState<Question[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionsForm>({
    resolver: zodResolver(questionsFormSchema),
  });

  const createQuestion = (data: Question) => {
    SetQuestions((prev) => [...prev, data]);
  };
  const deleteQuestion = (id: Question["id"]) => {
    SetQuestions((prev) => prev.filter((question) => question.id !== id));
  };

  return {
    questions,
    createQuestion,
    deleteQuestion,
    registerQuestionInput: register,
    handleSubmitQuestion: handleSubmit,
    questionsFormErrors: errors,
  };
}

export default useQuestions;
