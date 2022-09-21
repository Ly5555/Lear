import "./App.css";
import RecoilStatus from "./management/index";
import UseMemos from "./hooks/useMemo";
function App() {
  return (
    <div className="App">
      <RecoilStatus />
      <UseMemos />
    </div>
  );
}

export default App;
