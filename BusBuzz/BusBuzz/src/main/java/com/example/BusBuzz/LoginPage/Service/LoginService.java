package com.example.BusBuzz.LoginPage.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.BusBuzz.LoginPage.LoginModel.RegisterPojo;
import com.example.BusBuzz.LoginPage.LoginModel.Ticket;
import com.example.BusBuzz.LoginPage.LoginModel.TicketHistory;
import com.example.BusBuzz.LoginPage.LoginModel.UserPojo;
import com.example.BusBuzz.LoginPage.LoginRepo.HistoryRepo;
import com.example.BusBuzz.LoginPage.LoginRepo.LoginRepo;
import com.example.BusBuzz.LoginPage.LoginRepo.TicketRepository;
import com.example.BusBuzz.LoginPage.LoginRepo.UserInfoRepo;

@Service
public class LoginService {
	@Autowired
	LoginRepo loginRepo;
	
	@Autowired
	UserInfoRepo userInfo;
	
	@Autowired
	HistoryRepo history;
	
	 @Autowired
	 private TicketRepository ticketRepository;

	
	static int UserId;

	public List<RegisterPojo> getLoginDetails() {
		// TODO Auto-generated method stub
		return loginRepo.findAll();
	}
	

	public int addLoginDetails(String username, String email, String password) {
	    RegisterPojo register = new RegisterPojo(username, email, password);
	    
	    if (loginRepo.countByRusername(username) > 0) {
	        return 0;
	    }
	    if (loginRepo.countByREamil(email) > 0) {
	        return 1;
	    }
	    loginRepo.save(register);
	    UserId = loginRepo.findIdByUsername(username);
	    
	    return -99;
	}
	

	public int userLogin(String email, String password) {
		
		int value =  loginRepo.checkValid(email,password);
		if(value > 0) {
			return 0;
		}
		return 1;
	}


	public String addUserInfo(String name, String phone, String location, String occupation, String currentLoca) {
		UserPojo user = new UserPojo(UserId, name, phone, location, occupation, currentLoca);
		userInfo.save(user);
		return "added";
	}


	public UserPojo userInfo(String email, String password) {
		return userInfo.getUserInfo(email,password);
	}


	@Transactional
	public int addCash(int id, int payment) {
	    return userInfo.addUserCash(id, payment); // This now returns the number of rows updated
	}


	public void addTHistory(int userId, String bookedDate, String bookedTime, int price, int quantity,
            String stopName, int totalPrice) {
		TicketHistory ticketHistory = new TicketHistory(userId, bookedDate, bookedTime, price, quantity, stopName, totalPrice);
		history.save(ticketHistory); // Ensure 'history' is an instance of JpaRepository
		}


	public List<TicketHistory> getTHistory(int id) {
		// TODO Auto-generated method stub
		return history.getTicketHistory(id);
	}
	
	public String saveTicket(String report, MultipartFile file, Long userId) throws IOException {
        Ticket ticket = new Ticket();
        ticket.setReport(report);
        ticket.setUserId(userId);
        ticket.setFile(file.getBytes()); // Convert file to byte array

        ticketRepository.save(ticket); // Save to database

        return "Ticket uploaded successfully for userId: " + userId;
    }

}
