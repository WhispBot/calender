import "./scss/App.scss";
import Sidebar from "./components/sidebar";
import Calender from "./components/calender";

function App() {
    return <div className="App">
        <Sidebar />
        <Calender />
    </div>;
}

export default App;
