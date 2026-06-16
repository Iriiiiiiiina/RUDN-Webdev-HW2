import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";

import { useQuery } from "@tanstack/react-query";

import { getTodos } from "../api/todosApi";

import type { Task } from "../types/Task";

interface TasksContextType {
  tasks: Task[];
  createTask: (
    title: string,
    description: string
  ) => void;
  deleteTask: (id: number) => void;
  updateStatus: (
    id: number,
    status: 0 | 1 | 2
  ) => void;
}

const TasksContext =
  createContext<TasksContextType | null>(null);

export const TasksProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTodos
  });

  useEffect(() => {
    if (!data) return;

    const formattedTasks: Task[] = data.map(
      (todo: any) => ({
        id: todo.id,
        title: todo.title,
        description: "",
        createdAt: new Date().toISOString(),
        status: todo.completed ? 2 : 0
      })
    );

    setTasks(formattedTasks);
  }, [data]);

  const createTask = (
    title: string,
    description: string
  ) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
      status: 0
    };

    setTasks(prev => [newTask, ...prev]);
  };

  const deleteTask = (id: number) => {
    setTasks(prev =>
      prev.filter(task => task.id !== id)
    );
  };

  const updateStatus = (
    id: number,
    status: 0 | 1 | 2
  ) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, status }
          : task
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateStatus
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error(
      "useTasksContext must be used inside TasksProvider"
    );
  }

  return context;
};