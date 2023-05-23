export type TodoDataTypes = {
  id: number;
  title: string;
  desc: string;
  status: boolean;
  date?: string;
};

export type TodoState = {
  todo: { data: TodoDataTypes[] };
};
