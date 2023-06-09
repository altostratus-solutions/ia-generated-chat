import { useReducer } from "react";
import { chatBotFormState } from "../models";
import { addDoc, collection } from "firebase/firestore";
import { CHATBOT_COLLECTION, db } from "../firestore";

const initialState: chatBotFormState = {
  chatbotName: "",
  modelContext: "",
  modelExamples: [],
  currentExample: {
    inputText: "",
    outputText: "",
  },
};

export enum ACTIONS {
  SET_CURRENT_EXAMPLE_QUESTION = "SET_CURRENT_EXAMPLE_QUESTION",
  SET_CURRENT_EXAMPLE_ANSWER = "SET_CURRENT_EXAMPLE_ANSWER",
  SET_CHATBOT_NAME = "SET_CHATBOT_NAME",
  SET_MODEL_CONTEXT = "SET_MODEL_CONTEXT",
  ADD_MODEL_EXAMPLE = "ADD_MODEL_EXAMPLE",
  SEND_FORM = "SEND_FORM",
}

function chatBotFormReducer(state: chatBotFormState, action: Action<ACTIONS>) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_EXAMPLE_QUESTION: {
      return {
        ...state,
        currentExample: {
          inputText: action.payload,
          outputText: state.currentExample.outputText,
        },
      };
    }
    case ACTIONS.SET_CURRENT_EXAMPLE_ANSWER: {
      return {
        ...state,
        currentExample: {
          inputText: state.currentExample.inputText,
          outputText: action.payload,
        },
      };
    }
    case ACTIONS.SET_CHATBOT_NAME: {
      return {
        ...state,
        chatbotName: action.payload,
      };
    }
    case ACTIONS.SET_MODEL_CONTEXT: {
      return {
        ...state,
        modelContext: action.payload,
      };
    }
    case ACTIONS.ADD_MODEL_EXAMPLE: {
      return {
        ...state,
        modelExamples: [...state.modelExamples, state.currentExample],
        currentExample: initialState.currentExample,
      };
    }
    case ACTIONS.SEND_FORM: {
      return {
        ...initialState,
      };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

function useChatBotForm() {
  const [state, dispatch] = useReducer(chatBotFormReducer, initialState);
  
  const handleCreateExampleQuestion = (
    e: React.MouseEvent<HTMLButtonElement>
    ) => {
      e.preventDefault();
      dispatch({
        type: ACTIONS.ADD_MODEL_EXAMPLE,
      });
    };
    const handleCreateChatBot = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const chatbotCollectionRef = collection(db, CHATBOT_COLLECTION);
      await addDoc(chatbotCollectionRef, {
        chatbotName: state.chatbotName,
        modelContext: state.modelContext,
        modelExamples: state.modelExamples,
      });
      dispatch({
        type: ACTIONS.SEND_FORM,
      });
    };
    
    return {
      state,
      dispatch,
      handleCreateExampleQuestion,
      handleCreateChatBot,
    };
  }
  
  export default useChatBotForm;
  
  type ActionsWithoutPayload = ACTIONS.ADD_MODEL_EXAMPLE | ACTIONS.SEND_FORM;
  
  interface ActionWithoutPayload {
    type: ActionsWithoutPayload;
  }
  interface ActionsPayloads {
    [ACTIONS.SET_CURRENT_EXAMPLE_ANSWER]: string;
    [ACTIONS.SET_CURRENT_EXAMPLE_QUESTION]: string;
    [ACTIONS.SET_CHATBOT_NAME]: string;
    [ACTIONS.SET_MODEL_CONTEXT]: string;
    [ACTIONS.ADD_MODEL_EXAMPLE]: never;
    [ACTIONS.SEND_FORM]: never;
  }
  
  interface ActionWithPayload<T extends ACTIONS> {
    type: T;
    payload: ActionsPayloads[T];
  }
  
  type Action<T extends ACTIONS> = T extends ActionsWithoutPayload
    ? ActionWithoutPayload
    : ActionWithPayload<T>;