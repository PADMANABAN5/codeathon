package com.example.BusBuzz.LoginPage.LoginModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "tickets")
public class Ticket {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;

	 private String report;

	 private Long userId; // Storing user ID

	 @Lob
	 @Column(columnDefinition = "LONGBLOB")
	 private byte[] file; // Storing image as BLOB
	 
	 
	 public Ticket() {
		 
	 }
	 
	 

	public Ticket(Long id, String report, Long userId, byte[] file) {
		super();
		this.id = id;
		this.report = report;
		this.userId = userId;
		this.file = file;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReport() {
		return report;
	}

	public void setReport(String report) {
		this.report = report;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}
}
