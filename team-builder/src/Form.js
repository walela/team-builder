import React from "react";

function Form(props) {
  const { firstName, lastName, email, role } = props.data;
  return (
    <div className="form-container">
      <form>
        <fieldset>
          <legend>Add a Team Member</legend>
          <input
            type="email"
            name="email"
            placeholder="Email Adress"
            value={email}
            onChange={props.handleChange}
            required
          ></input>
          <input
            type="text"
            className="names first"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={props.handleChange}
            required
          ></input>
          <input
            type="text"
            className="names"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={props.handleChange}
            required
          ></input>
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={role}
            onChange={props.handleChange}
            required
          ></input>
          <button onClick={props.handleSubmit}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
