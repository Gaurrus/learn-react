import "./App.css";
import SaleJsxOne from "./sale-1";
import SaleJsxTwo from "./sale-2";

function App() {
  return (
    <div>
      <SaleJsxOne price="35 000" dates = "18, 19, 20" />
      <SaleJsxTwo price="8 000" />
    </div>
  );
}

export default App;
