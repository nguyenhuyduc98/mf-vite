import "./App.css";
import Button from "remoteApp/Button";
import useStore from "remoteApp/store";
function App() {
    const [count, setCount] = useStore();
    return (
        <div>
            <h1>Application host </h1>
            <Button />
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
}

export default App;
