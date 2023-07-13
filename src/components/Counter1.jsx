import useIncrement from "../hook/useIncrement"

function Counter1() {
    const [count, increase] = useIncrement(1)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>Add 1</button>
        </div>
    )
}

export default Counter1