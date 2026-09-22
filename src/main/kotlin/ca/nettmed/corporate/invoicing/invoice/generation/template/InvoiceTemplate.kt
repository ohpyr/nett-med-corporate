package ca.nettmed.corporate.invoicing.invoice.generation.template


class InvoiceTemplate
{
    val name: String
    val baseHTML: String
    var tagMap: Map<String, String> = emptyMap()

    constructor(name: String,  baseHTML: String, tagMap: Map<String, String>)
    {
        this.name = name
        this.baseHTML = baseHTML
        this.tagMap = tagMap
    }


    










}