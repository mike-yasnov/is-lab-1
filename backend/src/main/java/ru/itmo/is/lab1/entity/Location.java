package ru.itmo.is.lab1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "location")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Координата X не может быть null")
    @Column(nullable = false)
    private Integer x;

    @NotNull(message = "Координата Y не может быть null")
    @Column(nullable = false)
    private Long y;

    @NotNull(message = "Название локации не может быть null")
    @Size(max = 969, message = "Длина названия локации не должна быть больше 969")
    @Column(nullable = false, length = 969)
    private String name;
}

