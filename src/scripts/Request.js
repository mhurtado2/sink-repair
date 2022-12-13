
import { getRequests, deleteRequest, getPlumbers } from "./dataAccess.js"

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

            let matchingRequest = null
            for (const request of requests) {
                if (parseInt(requestId) === request.id) {
                    matchingRequest = request
                }
            }
            let matchingPlumber = null
            for (const plumber of plumbers) {
                if (matchingRequest.plumberId === plumber.id) {
                    matchingPlumber = plumber
                }
            }
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {}

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)

const requests = getRequests()
const plumbers = getPlumbers()


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


export const Requests = () => {
    const requests = getRequests()
    // const plumbers = getPlumbers()

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")
        } 
        </ul>
    `

    return html
}

/*
export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}
*/

