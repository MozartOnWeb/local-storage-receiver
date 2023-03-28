import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.origin !== "https://local-storage-sender.vercel.app") {
        return;
      }

      const data = JSON.parse(e.data);

      if (typeof data.phone !== "undefined") {
        localStorage.setItem("phone", data.phone);
        setPhone(data.phone);
      }

      if (typeof data.email !== "undefined") {
        localStorage.setItem("email", data.email);
        setEmail(data.email);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Receiver</h1>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

export default App;
