import useCount from "./store";

const Button = () => {
    const [count, setCount] = useCount();

    return (
        <div>
            <button
                className="shared-btn"
                onClick={() => setCount((s) => s + 1)}
            >
                Click me: {count}
            </button>
        </div>
    );
};

export default Button;
