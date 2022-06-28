import React from "react";

const FormWrapper = ({children, className, onSubmit}) => {
  return (
    <form
      className={`bg-white flex flex-col gap-4 w-full ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default FormWrapper;
