import useIncrement from "../hook/useIncrement"

function Counter2() {
    const [count, increase] = useIncrement(2)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>Add 2</button>
        </div>
    )
}

export default Counter2