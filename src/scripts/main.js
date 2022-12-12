
import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()





/*
const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = SinkRepair()
}

render()
*/
