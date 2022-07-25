import "./App.css";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import { Component } from "react";

state = {
  users: [
    {
      id: 1,
      name: "ahmet can yürekli",
      salary: "5000",
      department: "Bilişim",
    },
    {
      id: 2,
      name: "ahmet can 221",
      salary: "15454",
      department: "Bilişim",
    },
    {
      id: 3,
      name: "ahmet can sdds",
      salary: "4787",
      department: "Bilişim",
    },
  ],
};

function App() {
  return (
    <div className="container">
      <Navbar title="User App" />
      <hr />
      <Users users={this.state.users} />
    </div>
  );
}

export default App;
