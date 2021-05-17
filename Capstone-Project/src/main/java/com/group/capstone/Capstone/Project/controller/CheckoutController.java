package com.group.capstone.Capstone.Project.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.group.capstone.Capstone.Project.dto.Purchase;
import com.group.capstone.Capstone.Project.service.CheckoutServiceImpl;

@RestController
@Transactional
public class CheckoutController {
	@Autowired
	CheckoutServiceImpl checkoutServiceImpl;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/checkout")
	public void saveOrderDetails(@RequestBody Purchase purchase) {
		System.out.println(purchase);
		checkoutServiceImpl.saveOrderDetails(purchase);
	}
}
