import React, { useState } from "react";

function SignUp({ closeModal }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/home";
    }
  };

  return (
    <div className="modal">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="firstname"
        placeholder="Firstname"
        onChange={handleInputChange}
      />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
