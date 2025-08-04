import {useState}from "react";

export default function CounterPage() {
  const [counter, setCounter] = useState(0);
  
  const addCounter =() => {
    setCounter(counter+1);
  };


  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter:{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}
