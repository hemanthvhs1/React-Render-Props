import { useState } from "react";
import "./App.css";

function Input({ render }) {
  const [temp, setTemp] = useState("");
  return (
    <>
      <input
        type="text"
        className="temp-input"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      {render(temp)}
    </>
  );
}

function Kelvin({ temp }) {
  return <p>Temp in Kelvin : {+temp + 273.15}</p>;
}

function Fahrenheit({ temp }) {
  return <p>Temp in Fahrenheit : {(+temp * 9) / 5 + 32}</p>;
}

function DummyComponent() {
  return <p>I'm Dummy Component !</p>;
}

function App() {
  return (
    <>
      <Input
        render={(value) => (
          <>
            <Kelvin temp={value} />
            <Fahrenheit temp={value} />
          </>
        )}
      />
      <DummyComponent />
    </>
  );
}

export default App;

/* 
My Task:

When user enters temp in celsius,
System should print in 
  Kelvin and 
  Fahrenheit



Methods:

1.  Lifting the state.
    Lifiting the state is good. However when parent component rerenders due to change in
    hook/ state, Child components re-render too.
    In the above case, It is expected that the Kelvin and Fahrenheit components should
    re-render because props changed.
    However our Dummy Component should not re-render as it hasn't got anything to do with
    the props. But still if you observe the profiler this component rerenders because
    parent component - App rerendered.
    To avoid this behavior we can follow Method -2

2. React Render Props





*/
