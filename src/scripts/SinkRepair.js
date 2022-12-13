
import { Requests } from "./Request.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
        <h1 class="couple"><img src="https://post.psychcentral.com/wp-content/uploads/sites/4/2022/02/senior-asian-couple-kiss-affection-picnic-park-732x549-thumbnail-732x549.jpg" alt="Maude and Merle" width="200px">Maude and Merle's Sink Repair </h1>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}

//if you want a space between pic and word, I think you will have to
//put both of them in a div as separate elements and then add margin 

