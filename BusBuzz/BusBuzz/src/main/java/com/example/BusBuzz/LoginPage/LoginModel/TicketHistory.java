package com.example.BusBuzz.LoginPage.LoginModel;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TicketHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate ID
    private int id;
    
    private int userId;
    private String bookedDate;
    private String bookedTime;
    private int price;
    private int quantity;
    private String stopName;
    private int totalPrice;

    // ✅ Default constructor (required for Hibernate)
    public TicketHistory() {
    }

    // ✅ Constructor without 'id' (used when inserting a new ticket)
    public TicketHistory(int userId, String bookedDate, String bookedTime, int price, int quantity,
                         String stopName, int totalPrice) {
        this.userId = userId;
        this.bookedDate = bookedDate;
        this.bookedTime = bookedTime;
        this.price = price;
        this.quantity = quantity;
        this.stopName = stopName;
        this.totalPrice = totalPrice;
    }

    // ✅ Constructor including 'id' (used when retrieving data from DB)
    public TicketHistory(int id, int userId, String bookedDate, String bookedTime, int price, int quantity,
                         String stopName, int totalPrice) {
        this.id = id;
        this.userId = userId;
        this.bookedDate = bookedDate;
        this.bookedTime = bookedTime;
        this.price = price;
        this.quantity = quantity;
        this.stopName = stopName;
        this.totalPrice = totalPrice;
    }

    // ✅ Getters and Setters (required by Hibernate)
    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getBookedDate() {
        return bookedDate;
    }

    public void setBookedDate(String bookedDate) {
        this.bookedDate = bookedDate;
    }

    public String getBookedTime() {
        return bookedTime;
    }

    public void setBookedTime(String bookedTime) {
        this.bookedTime = bookedTime;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getStopName() {
        return stopName;
    }

    public void setStopName(String stopName) {
        this.stopName = stopName;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }
}