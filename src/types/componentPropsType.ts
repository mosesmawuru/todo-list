import { TodoDataTypes } from "./dataTypes";

export type InputProps = {
  value: string;
  name?: string;
  textarea?: boolean;
  label?: string;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
} & React.HTMLAttributes<HTMLElement>;

export type TodoItemProps = {
  onEdit: () => void;
  onStatusChange: () => void;
  onRemove: () => void;
  onExpend: (id: number) => void;
  isExpand?: boolean;
} & TodoDataTypes;

export type TableBodyProps = {
  todoList: Array<TodoDataTypes>;
  onEdit: (key: "add" | "edit", id: number) => void;
};

export type ButtonProps = {
  label?: string;
  onClick?: () => void;
  type?: "default" | "success" | "danger" | undefined;
  disabled?: boolean;
};

export type ModalProps = {
  type?: "edit" | "add";
  isShow: boolean;
  editId?: number;
  onClose?: () => void;
  onSave?: (data: string) => void;
  onOk?: () => void;
};

export type TableHeaderProps = {
  onAdd: (key: "add" | "edit", id: number) => void;
  onSearch?: (value: string) => void;
};
