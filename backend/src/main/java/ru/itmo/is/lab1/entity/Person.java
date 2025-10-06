package ru.itmo.is.lab1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "person")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Цвет глаз не может быть null")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Color eyeColor;

    @NotNull(message = "Цвет волос не может быть null")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Color hairColor;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "location_id")
    private Location location;

    @Column
    private LocalDate birthday;

    @Positive(message = "Рост должен быть больше 0")
    @Column(nullable = false)
    private float height;
}

