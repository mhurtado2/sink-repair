
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

            const completion = {
                requestid: parseint(requestId),
                plumberid: parseint(plumberId),
                date_created: timestamp
            }

            saveCompletion(completion)
        }
    }
)



const convertRequestToListElement = (request) => {
    const plumbers = getPlumbers()
    const completions = getCompletions()

    let htmlString = ""
    completions.map(completion => {
        if (parseInt(completion.requestId) === request.id) {
            htmlString = `
                        <li class="done">
                            ${request.description}
                            <button class="request__delete" id="request--${request.id}">
                            Delete
                            </button>
                        </li>
                        `
        }
        else {
            htmlString = `<div class="request"><li class="request_li">
            ${request.description}<div class="space">
            <select class="plumbers" id="plumbers">
            <option value="">Choose</option>
            ${plumbers.map(
                plumber => {
                    return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                }
            ).join("")
                }
                </select>
                <button class="request__delete" id="request--${request.id}">
                    Delete
                </button>
        </div></li></div>
        `
        }
    })
    return htmlString
}


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
        <div class="Table">
        <h1>Description</h2>
        <h2>Completed By</h2>
        </div>
            ${requests.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}


/*
const convertRequestToListElement = (request) => {
    const plumbers = getPlumbers()
    let html = ""
    html += `<div class="request"><li class="request_li">${request.description}
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
        Delete </button> </li><div>`
    return html
}
*/
