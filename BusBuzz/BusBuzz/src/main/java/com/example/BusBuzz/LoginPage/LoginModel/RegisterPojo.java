package com.example.BusBuzz.LoginPage.LoginModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegisterPojo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate ID
    private Long id;

    @Column(name = "Rusername")
    private String Rusername;

    @Column(name = "REamil")
    private String REamil;
    private String RPassword;

    public RegisterPojo() {
    }

    public RegisterPojo(String rusername, String rEamil, String rPassword) {
        this.Rusername = rusername;
        this.REamil = rEamil;
        this.RPassword = rPassword;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getRusername() {
        return Rusername;
    }

    public void setRusername(String rusername) {
        this.Rusername = rusername;
    }

    public String getREamil() {
        return REamil;
    }

    public void setREamil(String rEamil) {
        this.REamil = rEamil;
    }

    public String getRPassword() {
        return RPassword;
    }

    public void setRPassword(String rPassword) {
        this.RPassword = rPassword;
    }
}
