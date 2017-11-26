package md.gva.core.controller

import md.gva.core.domain.Greet
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = "/api", produces = arrayOf(MediaType.APPLICATION_JSON_UTF8_VALUE))
class GreetController {

    @GetMapping
    fun index(): ResponseEntity<Greet> = ResponseEntity.ok(Greet("Gladis", "Vladlen"))
}