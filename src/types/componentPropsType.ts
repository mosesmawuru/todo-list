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
} & TodoDataTypes;

export type TableBodyProps = {
  todoList: Array<TodoDataTypes>;
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
  onClose?: () => void;
  onSave?: (data: string) => void;
};

export type TableHeaderProps = {
  onAdd?: () => void;
  onSearch?: () => void;
};
