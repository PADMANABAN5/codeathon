package com.example.BusBuzz.LoginPage.LoginController;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.BusBuzz.LoginPage.LoginModel.RegisterPojo;
import com.example.BusBuzz.LoginPage.LoginModel.UserPojo;
import com.example.BusBuzz.LoginPage.LoginModel.TicketHistory;
import com.example.BusBuzz.LoginPage.Service.LoginService;

@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	LoginService login;
	

	@PostMapping("/login/Register")
	public int Register(@RequestParam("Rusername")  String Rusername,
							@RequestParam("REamil") String REamil,
							@RequestParam("RPassword") String RPassword) {
		return login.addLoginDetails(Rusername,REamil,RPassword);
	}
	
	
//	@PostMapping("/Register")
//	public String addLoginDetails(@RequestBody RegisterPojo register) {
//	    return login.addLoginDetails(register.getRusername(), register.getREamil(), register.getRPassword());
//	}
	
	@GetMapping("/login/LoginDetails")
	public List<RegisterPojo> LoginDetails(){
		return login.getLoginDetails();
	}
	
	
	
	@PostMapping("/Login")
	public UserPojo UserLogin(@RequestParam("email") String email,
			@RequestParam("password") String password) {
		int value = login.userLogin(email,password);
		return login.userInfo(email,password);
//		return value;
	}
	
	
	
	@PostMapping("/Info")
	public int UserInfo(@RequestParam("name") String name,
						@RequestParam("phone") String phone,
						@RequestParam("location") String location,
						@RequestParam("occupation") String occupation,
						@RequestParam("currentLoca") String currentLoca) {
		
		login.addUserInfo(name,phone,location,occupation,currentLoca);
		return 1;
	}
	
	
	
	@PostMapping("/CardPayment")
	public ResponseEntity<String> CashStore(@RequestParam("id") int id,
						   @RequestParam("cash") int cash) {
		int updatedRows = login.addCash(id, cash);
		
	    if (updatedRows > 0) {
	        return ResponseEntity.ok("{\"status\": \"success\"}");
	    } else {
	        return ResponseEntity.badRequest().body("{\"status\": \"error\"}");
	    }
	}
	
	
	
	@PostMapping("/THistory")
	public String processTicketHistory(@RequestBody TicketHistory ticket, @RequestParam("UserId") int userId) {
	    login.addTHistory(userId, ticket.getBookedDate(), ticket.getBookedTime(), ticket.getPrice(),
	            ticket.getQuantity(), ticket.getStopName(), ticket.getTotalPrice());
	    return "Ticket history saved successfully!";
	}
	
	
	
	@GetMapping("GetTHistory/{id}")
	public List<TicketHistory> getTHistory(@PathVariable("id") int id){
		return login.getTHistory(id);
	}
	
	
	
	@CrossOrigin(origins = "*")	
	@PostMapping("/api/tickets/upload")
	public ResponseEntity<String> uploadTicket(
	        @RequestParam("report") String report,
	        @RequestParam("file") MultipartFile file,
	        @RequestParam("userId") Long userId) {
	    try {
	        return ResponseEntity.ok(login.saveTicket(report, file, userId));
	    } catch (IOException e) {
	        return ResponseEntity.status(500).body("Failed to upload ticket");
	    }
	}
}
