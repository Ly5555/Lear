import "./App.css";
import RecoilStatus from "./management/index";
import UseMemos from "./hooks/useMemo";
import Father from "./hooks/forwordref"
function App() {
  return (
    <div className="App">
      <RecoilStatus />
      <UseMemos />
      <Father/>
    </div>
  );
}

export default App;
