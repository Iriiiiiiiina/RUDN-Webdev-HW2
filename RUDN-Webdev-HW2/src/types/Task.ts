export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: 0 | 1 | 2;
}