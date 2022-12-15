
import { Requests } from "./Request.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
        <div class="couple"><h1><img src="https://post.psychcentral.com/wp-content/uploads/sites/4/2022/02/senior-asian-couple-kiss-affection-picnic-park-732x549-thumbnail-732x549.jpg" alt="Maude and Merle" width="200px">Maude and Merle's Sink Repair </h1></div>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}



