import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FormField;
