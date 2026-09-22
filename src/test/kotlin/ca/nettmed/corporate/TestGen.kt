package ca.nettmed.corporate

import ca.nettmed.corporate.invoicing.invoice.management.InvoiceTemplateManager
import kotlin.io.path.Path


fun main() {
    val templateManager = InvoiceTemplateManager(Path(".test/invoice/template"))

}