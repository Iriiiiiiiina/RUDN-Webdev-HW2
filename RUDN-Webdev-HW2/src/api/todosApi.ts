import axios from "axios";

export const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=15"
  );

  return response.data;
};