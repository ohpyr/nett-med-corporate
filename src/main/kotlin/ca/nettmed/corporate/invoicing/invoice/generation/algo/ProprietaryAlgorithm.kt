package ca.nettmed.corporate.invoicing.invoice.generation.algo

import ca.nettmed.corporate.invoicing.invoice.Invoice
import ca.nettmed.corporate.invoicing.invoice.generation.AIModel
import ca.nettmed.corporate.invoicing.invoice.generation.template.InvoiceTemplate

class ProprietaryAlgorithm : InvoiceGenerationAlgorithm

{


    fun freePrompt(
        userPrompt: String
    ): String {

        return """
            
            
        """.trimIndent()
    }



    override fun generate(

        userPrompt: String,
        aiModel: AIModel
    ): InvoiceTemplate {



    TODO()

    }
}