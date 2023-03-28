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
      }

      if (typeof data.email !== "undefined") {
        localStorage.setItem("email", data.email);
      }
    });

    const localPhone = localStorage.getItem("phone") as string;
    const localEmail = localStorage.getItem("email") as string;

    setPhone(localPhone);
    setEmail(localEmail);
  }, [localStorage]);

  return (
    <div className="App">
      <h1>Receiver</h1>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
    </div>
  );
}

export default App;
