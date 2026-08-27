import "./App.css";
import MountMessage from "./components/MountMessage";

function App() {
  return (
    <>
      <div className="min-h-screen border flex flex-col items-center justify-center bg-gray-500 text-black">
        <h1 className="!text-black">React-useEffect-MountApp</h1>
        <MountMessage />
      </div>
    </>
  );
}

export default App;
