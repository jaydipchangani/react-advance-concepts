import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((o) => !o);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function ToggleButton() {
  const { on, toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}

function ToggleStatus() {
  const { on } = useContext(ToggleContext);
  return (
    <p style={{ color: on ? "green" : "red" }}>
      Status: {on ? "Enabled ✅" : "Disabled ❌"}
    </p>
  );
}

function CompundComponents() {
  return (
    <div>
      <h1>Compound Components</h1>
      <Toggle>
        <ToggleButton />
        <ToggleStatus />
      </Toggle>
    </div>
  );
}

export default CompundComponents;
