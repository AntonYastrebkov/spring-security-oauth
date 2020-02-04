package com.example.resource.bar.controller;

import com.example.resource.bar.dto.Bar;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class BarController {
    private final Random random = new Random();

    @GetMapping("/get")
    public Bar getApi() {
        return new Bar(random.nextLong(), "Bar_info");
    }
}