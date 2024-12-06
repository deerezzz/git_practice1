import React from "react";

export const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" />
      </div>

      <div className="mb-3">
        <label htmlFor="Age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
    </form>
  );
};

export default Form;