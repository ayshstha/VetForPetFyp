import React from "react";
import { Controller } from "react-hook-form";

const MyTextField = ({ label, name, control, type = "text" }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={`Enter your ${label.toLowerCase()}`}
            className={error ? "input-error" : ""}
          />
          {error && <span className="error-message">{error.message}</span>}
        </div>
      )}
    />
  );
};

export default MyTextField;
