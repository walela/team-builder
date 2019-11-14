import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

const initialTeam = [
  {
    firstName: "Austin",
    lastName: "Walela",
    email: "austinwalela@gmail.com",
    role: "Backend Engineer"
  },
  {
    firstName: "Colin",
    lastName: "Toft",
    email: "cappers86@gmail.com",
    role: "Site Reliability Engineer"
  },
  {
    firstName: "Jordan",
    lastName: "Covo",
    email: "jcovo@gmail.com",
    role: "Frontend Engineer"
  },
  {
    firstName: "Petar",
    lastName: "Vlaisavljevic",
    email: "ropeks@gmail.com",
    role: "CTO"
  }
];

const initialMemberForm = {
  firstName: "",
  lastName: "",
  email: "",
  role: ""
};

function Member(props) {
  const { firstName, lastName, email, role } = props;
  return (
    <div className="card">
      <h3>{`${firstName} ${lastName}`}</h3>
      <div>
        <b>Email</b>: {email}
      </div>
      <div>
        <b>Role</b>: {role}
      </div>
    </div>
  );
}

function App() {
  const [team, setTeam] = useState(initialTeam);
  const [memberForm, setMemberForm] = useState(initialMemberForm);

  const handleChange = e => {
    setMemberForm({ ...memberForm, [e.target.name]: e.target.value });
    console.log(memberForm);
  };

  const handleSubmit = e => {
    e.preventDefault();
    Object.entries(memberForm).forEach(([key, value]) => {
      if (value === "") {
        console.error("Invalid input. Try again.");
        return;
      } else {
        setTeam(team.concat(memberForm));
        setMemberForm(initialMemberForm);
      }
    });
  };

  return (
    <div className="App">
      <h1>WEBEU4, Inc</h1>
      <div className="team-list">
        {team.map(member => {
          return (
            <Member
              firstName={member.firstName}
              lastName={member.lastName}
              email={member.email}
              role={member.role}
              key={member.email}
            />
          );
        })}
      </div>
      <Form data={memberForm} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
