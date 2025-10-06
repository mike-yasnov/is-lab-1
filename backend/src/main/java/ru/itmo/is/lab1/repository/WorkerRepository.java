package ru.itmo.is.lab1.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import ru.itmo.is.lab1.entity.Worker;

import java.util.List;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long>, JpaSpecificationExecutor<Worker> {
    
    List<Worker> findByNameStartingWith(String prefix);
    
    List<Worker> findByRating(Integer rating);
    
    long countByOrganizationId(Long organizationId);
    
    Page<Worker> findAll(Pageable pageable);
}

