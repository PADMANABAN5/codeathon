package com.example.BusBuzz.LoginPage.LoginRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BusBuzz.LoginPage.LoginModel.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
