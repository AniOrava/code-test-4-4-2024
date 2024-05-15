import "./App.css";
import { FilteredNumberList } from "./filtered-number-list";

function App() {
  return (
    <div className="app">
      <div className="app-container">
					{/* Use new component here */}
					<FilteredNumberList />
      </div>
    </div>
  );
}

export default App;
