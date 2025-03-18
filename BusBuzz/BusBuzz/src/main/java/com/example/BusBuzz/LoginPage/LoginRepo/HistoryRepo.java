package com.example.BusBuzz.LoginPage.LoginRepo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.BusBuzz.LoginPage.LoginModel.TicketHistory;

@Repository
public interface HistoryRepo extends JpaRepository<TicketHistory, Integer>{

	@Query(value = "select * from ticket_history where user_Id=:id;",nativeQuery = true)
	List<TicketHistory> getTicketHistory(int id);

}
