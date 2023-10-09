import { useState } from "react";

export default function Login(e) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = () => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>EMail</label>
        <input
          type="email"
          placeholder="enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
