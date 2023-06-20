import { useReducer } from "react";
import { chatBotFormState } from "../models";
import { addDoc, collection } from "firebase/firestore";
import { CHATBOT_COLLECTION, db } from "../firestore";
import { v4 as uuidv4 } from 'uuid';
const initialState: chatBotFormState = {
  chatbotName: "",
  modelContext: "",
  modelExamples: [],
  currentExample: {
    inputText: "",
    outputText: "",
    id: "",
  },
};

export enum ACTIONS {
  SET_CURRENT_EXAMPLE_QUESTION = "SET_CURRENT_EXAMPLE_QUESTION",
  SET_CURRENT_EXAMPLE_ANSWER = "SET_CURRENT_EXAMPLE_ANSWER",
  SET_CHATBOT_NAME = "SET_CHATBOT_NAME",
  SET_MODEL_CONTEXT = "SET_MODEL_CONTEXT",
  ADD_MODEL_EXAMPLE = "ADD_MODEL_EXAMPLE",
  DELETE_MODEL_EXAMPLE = "DELETE_MODEL_EXAMPLE",
  SEND_FORM = "SEND_FORM",
}

function chatBotFormReducer(state: chatBotFormState, action: Action<ACTIONS>) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_EXAMPLE_QUESTION: {
      return {
        ...state,
        currentExample: {
          ...state.currentExample,
          inputText: action.payload,
        },
      };
    }
    case ACTIONS.SET_CURRENT_EXAMPLE_ANSWER: {
      return {
        ...state,
        currentExample: {
          ...state.currentExample,
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
        modelExamples: [{
          inputText: state.currentExample.inputText,
          outputText: state.currentExample.outputText,
          id: uuidv4(),
        },...state.modelExamples],
        currentExample: initialState.currentExample,
      };
    }


    case ACTIONS.DELETE_MODEL_EXAMPLE: {
      return {
        ...state,
        modelExamples: state.modelExamples.filter((example) => example.id !== action.payload),
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
  const [state, dispatch] = useReducer<(state: chatBotFormState, action: Action<ACTIONS>) => chatBotFormState>(chatBotFormReducer, initialState);
  
  const handleCreateExampleQuestion = (
    e: React.MouseEvent<HTMLButtonElement>
    ) => {
      e.preventDefault();
      if (state.currentExample.inputText === "" || state.currentExample.outputText === "") return;
      dispatch({
        type: ACTIONS.ADD_MODEL_EXAMPLE,
      });
    };
    const handleCreateChatBot = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const chatbotCollectionRef = collection(db, CHATBOT_COLLECTION);
      if (state.chatbotName === "" || state.modelContext === "" || state.modelExamples.length === 0) return;
      await addDoc(chatbotCollectionRef, {
        chatbotName: state.chatbotName,
        modelContext: state.modelContext,
        modelExamples: state.modelExamples,
      });
      dispatch({
        type: ACTIONS.SEND_FORM,
      });
    };

    const handleDeleteExample = (id: string) => {
      dispatch({
        type: ACTIONS.DELETE_MODEL_EXAMPLE,
        payload: id,
      });
  }
    
    return {
      state,
      dispatch,
      handleCreateExampleQuestion,
      handleCreateChatBot,
      handleDeleteExample,
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
    [ACTIONS.DELETE_MODEL_EXAMPLE]: string;
  }
  
  interface ActionWithPayload<T extends ACTIONS> {
    type: T;
    payload: ActionsPayloads[T];
  }
  
  type Action<T extends ACTIONS> = T extends ActionsWithoutPayload
    ? ActionWithoutPayload
    : ActionWithPayload<T>;