import {createRoot} from "react-dom/client"

const App = () => {
    
    function handleClick() {
        console.log("Button Clicked!")
    }

    return (
        <div className="App">
            <h1>Sanity Check</h1>
            <button onClick={handleClick}>Do Something</button>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

