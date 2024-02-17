import React from "react";
import { useNavigate } from "react-router-dom";

function Ready() {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <section className="hero" id="ready">
      <h2>Ready to get started?</h2>
      <button onClick={() => navigateTo("/login")}>JOIN US TODAY</button>
    </section>
  );
}

export default Ready;
