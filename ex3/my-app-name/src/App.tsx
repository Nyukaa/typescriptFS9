import Welcome from "./components/Welcome";

const App = () => {
  const name = "Sarah";

  return (
    <div>
      <Welcome name={name} />
    </div>
  );
};

export default App;
