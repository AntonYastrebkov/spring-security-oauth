package com.example.security.auth.controller;

import com.example.security.auth.model.User;
import com.example.security.auth.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public User register(
            @RequestParam String username,
            @RequestParam String password,
            @RequestParam String email
    ) {
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setEnabled(true);
        user.setPassword(passwordEncoder.encode(password));
        return userRepository.save(user);
    }
}
