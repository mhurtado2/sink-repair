
import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { fetchPlumbers } from "./dataAccess.js"
import { fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchPlumbers())
    .then(() => fetchCompletions())
    .then(() => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

/*
const renderTwo = () => {
    fetchPlumbers()
        .then(() => fetchPlumbers())
        .then(
            () => {
                mainContainer.innerHTML = SinkRepair()
            }
        )
}

renderTwo()

const renderThree = () => {
    fetchCompletions()
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = SinkRepair()
            }
        )
}

renderThree()
*/

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

