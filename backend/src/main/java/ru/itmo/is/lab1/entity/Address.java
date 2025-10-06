package ru.itmo.is.lab1.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "address")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 113, message = "Длина улицы не должна быть больше 113")
    @Column(length = 113)
    private String street;

    @NotNull(message = "Почтовый индекс не может быть null")
    @Column(nullable = false)
    private String zipCode;
}

