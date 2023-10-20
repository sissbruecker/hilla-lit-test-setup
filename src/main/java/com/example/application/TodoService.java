package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;

@BrowserCallable
@AnonymousAllowed
public class TodoService {
    public void addTodo(String todo) {
        System.out.println("addTodo: " + todo);
    }
}
