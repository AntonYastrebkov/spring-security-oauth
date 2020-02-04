package com.example.resource.foo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Foo {
    private long id;
    private String info;
}