export enum InputMapType {
    TEXT = 'text',
    CHECKBOX = 'checkbox',
    SELECT = 'select',
}

export type Fieldtype = 'text' | 'number' | 'checkbox' | 'select';

export type Field = {
    name: string;
    label: string;
    type: Fieldtype;  // Add more types as needed
  };

  export interface FieldStateProps {
    value: unknown;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | undefined;
    touched?: boolean;
    label: string;
  }

  export type FormValues = {
    [key: string]: unknown; // To allow dynamic fields with different types
  };

  export interface PFormRef {
    submit: () => void;
    reset: () => void;
  }