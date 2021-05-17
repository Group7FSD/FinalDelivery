package com.group.capstone.Capstone.Project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.group.capstone.Capstone.Project.dao.AddressRepository;
import com.group.capstone.Capstone.Project.dao.CustomerRepository;
import com.group.capstone.Capstone.Project.dao.OrderRepository;
import com.group.capstone.Capstone.Project.entity.Address;
import com.group.capstone.Capstone.Project.entity.Customer;
import com.group.capstone.Capstone.Project.entity.Order;
import com.group.capstone.Capstone.Project.service.CheckoutService;
import com.group.capstone.Capstone.Project.service.CheckoutServiceImpl;

@SpringBootApplication
public class CapstoneProjectApplication {
	public static void main(String[] args) {
		SpringApplication.run(CapstoneProjectApplication.class, args);
	}

}
