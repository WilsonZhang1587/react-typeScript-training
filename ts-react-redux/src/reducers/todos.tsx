import { TodoAction, ADD_TODO, Todo } from "../actions";

const todos = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default todos;
