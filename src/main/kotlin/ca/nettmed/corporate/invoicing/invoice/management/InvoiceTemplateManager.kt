package ca.nettmed.corporate.invoicing.invoice.management

import ca.nettmed.corporate.invoicing.invoice.generation.template.InvoiceTemplate
import org.springframework.boot.json.BasicJsonParser
import org.springframework.boot.json.JacksonJsonParser
import tools.jackson.core.JsonParser
import java.nio.file.Files
import java.nio.file.Path
import kotlin.io.path.exists
import kotlin.io.path.listDirectoryEntries
import kotlin.io.path.readText
import kotlin.streams.toList

class InvoiceTemplateManager
{
    val dir: Path

    val templateMap: Map<String, InvoiceTemplate>

    constructor(dir: Path) {
        this.dir = dir
        this.templateMap = emptyMap()
        harvestTemplate()
    }

    private fun harvestTemplate()
    {
       if (!dir.exists()) return

        fun readMetadata(path: Path, isBaseDir: Boolean = false)
        {
            val newPath = path.resolve("metadata.json")

            if(newPath.exists())
            {
                val json = JacksonJsonParser().parseMap(newPath.readText(Charsets.UTF_8))

                


            }



        }


        Files.list(dir).use {
            files -> files.toList()
                .forEach {


            }
        }



    }



}