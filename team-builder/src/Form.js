import React from "react";

function Form(props) {
  const { firstName, lastName, email, role } = props.data;
  return (
    <form>
      <fieldset>
        <legend>Add a Team Member</legend>
        <input type="email" name="email" placeholder="Email Adress" value={email}></input>
        <input type="text" name="firstName" placeholder="First Name" value={firstName}></input>
        <input type="text" name="lastName" placeholder="Last Name" value={lastName}></input>
        <input type="text" name="role" placeholder="Role" value={role}></input>
      </fieldset>
    </form>
  );
}

export default Form;