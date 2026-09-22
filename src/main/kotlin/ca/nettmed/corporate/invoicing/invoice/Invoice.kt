package ca.nettmed.corporate.invoicing.invoice

import ca.nettmed.corporate.invoicing.invoice.generation.template.InvoiceTemplate
import java.io.Serializable

class Invoice: Serializable
{
    val name: String
    var template: InvoiceTemplate

    constructor(name: String, template: InvoiceTemplate)
    {
        this.name = name
        this.template = template
    }






}