package com.example.BusBuzz.LoginPage.LoginModel;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserPojo {
	@Id
	private int id;
	private String name;
	private String phone;
	private String location;
	private String occupation;
	private String currentLoca;
	private int Wallet = 0;
	
	
	
	
	public UserPojo() {
		
	}
	
	
	
	
	public UserPojo(int id, String name, String phone, String location, String occupation, String currentLoca) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.location = location;
		this.occupation = occupation;
		this.currentLoca = currentLoca;
	}
	
	


	public int getWallet() {
		return Wallet;
	}

	public void setWallet(int wallet) {
		Wallet = wallet;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getCurrentLoca() {
		return currentLoca;
	}
	public void setCurrentLoca(String currentLoca) {
		this.currentLoca = currentLoca;
	}




	@Override
	public String toString() {
		return "UserPojo [id=" + id + ", name=" + name + ", phone=" + phone + ", location=" + location + ", occupation="
				+ occupation + ", currentLoca=" + currentLoca + ", Wallet=" + Wallet + "]";
	}
	
	
}
