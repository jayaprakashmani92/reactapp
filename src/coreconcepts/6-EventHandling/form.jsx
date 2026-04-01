import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const clickEvents = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
  };

  return (
    <>
      <form onSubmit={clickEvents}>
        <input type="text" name="name" required placeholder="Enter your name" />
        <br />
        <input type="email" name="email" required placeholder="Enter your email ID" />
        <br />
        <button type="submit" className="clickBtn">Submit</button>
      </form>
      <p>Your name: {name}</p>
      <p>Your email: {email}</p>
    </>
  );
}
