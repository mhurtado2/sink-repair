
import { getRequests, deleteRequest, getPlumbers, saveCompletion, getCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            const timestamp = Date.now()

            const completions = {
                requestid: parseInt(requestId),
                plumberid: parseInt(plumberId),
                date_created: timestamp
            }

            saveCompletion(completions)
        }
    }
)


const convertRequestToListElement = (request) => {
    const completions = getCompletions()
    const plumbers = getPlumbers()

    let html = ""
    html = `<div class="request"><li class="request_li">${request.description}<div class="space">
    <select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${plumbers.map(
        plumber => {
            return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
        }
    ).join("")
        }
    </select>
        <button class="request__delete"id="request--${request.id}">
        Delete </button> </div> </li> </div>`

    completions.map(completion => {
        if (completion.requestid === request.id) {
            html =
                `
                    <div class="request"><li class="done">
                                ${request.description}<div class="space">
                                    <button class="request__delete" id="request--${request.id}">
                                    Delete
                                    </button>
                               </div></li></div>`
        }
    }
    )

    return html
}


export const Requests = () => {
    const requests = getRequests()

    let html = `   
        <li class="color"><div class= "Table">
        <h1>Description</h1>
        <h2>Completed By</h2>
        </div>
            ${requests.map(convertRequestToListElement).join("")
        }
        </li>
    `
    return html
}



