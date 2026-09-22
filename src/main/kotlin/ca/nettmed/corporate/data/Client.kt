package ca.nettmed.corporate.data

import ca.nettmed.corporate.invoicing.invoice.Invoice
import java.io.Serializable

class Client: Serializable
{
    val name: String;



    var invoices: List<Invoice>? = null

    var clientData: Map<String, String> = emptyMap()
    var trackingData: Map<String, String> = emptyMap()
    


    constructor(name: String)
    {
        this.name = name;
    }


}