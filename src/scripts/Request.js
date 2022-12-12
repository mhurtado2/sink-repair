import { getRequests } from "./dataAccess.js"


const convertRequestToListElement = (request) => {
    let html = ""

    html += '<select class="serviceRequests">'
        html += `${request.description}`
    

    html += "</select>"
    return html 
}




export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}
