import {createRoot} from "react-dom/client"

const App = () => {

    // function handleClick() {
    //     console.log("Button Clicked!")
    // }

    // function handleClickBtn(e) {
    //     console.log("Burning this mula, Burning this mula!")
    // }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log("I was submitted!")
    // }

    // function handleDblClick(e) {
    //     let changedStr = e.target.value + " " + "HAVE MERCY!"
    //     console.log(changedStr)
    // }

    // return (
    //     <div className="App">
    //         <h1>Sanity Check</h1>
    //         <button onClick={handleClick}>Do Something</button>
    //         <button onClick={handleClickBtn}>More and More</button>
    //         <input onDoubleClick={handleDblClick} />
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" />
    //             <button type="submit">Submit</button>
    //         </form>
    //     </div>
    // )

    function handleSubmit(e) {
        e.preventDefault()
        let inputNum1 = document.getElementById("num_1").value
        let inputNum2 = document.getElementById("num_2").value

        let divResponseBox = document.getElementById("response_box")
        divResponseBox.innerHTML = `<p>You have chosen to add together ${inputNum1} and ${inputNum2}</p>`

        let sumResult = (Number(inputNum1)) + (Number(inputNum2))
        divResponseBox.innerHTML += `<p>The result of this calculation is ${sumResult}`
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" id="num_1"/>
                <input type="number" id="num_2"/>
                <button type="submit">Submit</button>
            </form>
            <div id="response_box">

            </div>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

