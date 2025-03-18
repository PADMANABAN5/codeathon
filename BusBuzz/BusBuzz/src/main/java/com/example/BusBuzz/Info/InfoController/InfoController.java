package com.example.BusBuzz.Info.InfoController;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {
	
	@PostMapping("/card/payment")
	public void Payment(@RequestParam("payment") int payment) {
		System.out.println(payment);
	}
	
}
