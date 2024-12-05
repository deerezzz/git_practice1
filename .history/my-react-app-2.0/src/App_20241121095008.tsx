import { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(true);
  };
  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}
