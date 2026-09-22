package ca.nettmed.corporate

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CorporateApplication

fun main(args: Array<String>) {
    runApplication<CorporateApplication>(*args)
}
