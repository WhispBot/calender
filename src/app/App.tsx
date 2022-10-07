import "../scss/layout/_app.scss";
import Sidebar from "../containers/sidebar";
import Calender from "../containers/calender";

function App() {
    return <div className="app">
        <Sidebar />
        <Calender />
    </div>;
}

export default App;
