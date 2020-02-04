package com.example.resource.foo.controller;

import com.example.resource.foo.dto.Foo;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class FooController {
    private final Random random = new Random();

    @PreAuthorize("#oauth2.hasScope('read')")
    @RequestMapping(value = "/foo/{id}", method = RequestMethod.GET)
    public Foo getById(@PathVariable Long id) {
        return new Foo(random.nextLong(), "info");
    }
}