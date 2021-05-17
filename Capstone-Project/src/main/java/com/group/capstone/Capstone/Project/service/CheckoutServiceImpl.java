package com.group.capstone.Capstone.Project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group.capstone.Capstone.Project.dao.AddressRepository;
import com.group.capstone.Capstone.Project.dao.CustomerRepository;
import com.group.capstone.Capstone.Project.dao.OrderRepository;
import com.group.capstone.Capstone.Project.dto.Purchase;
import com.group.capstone.Capstone.Project.entity.Address;
import com.group.capstone.Capstone.Project.entity.Customer;
import com.group.capstone.Capstone.Project.entity.Order;

@Service
public class CheckoutServiceImpl implements CheckoutService {

	@Autowired
	CustomerRepository customerRepository;

	public CheckoutServiceImpl(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	@Override
	public void saveOrderDetails(Purchase purchase) {
		Order order = purchase.getOrder();
		Customer customer = purchase.getCustomer();
		Address address = purchase.getAddress();
		order.setAddress(address);
		customer.add(order);
		customerRepository.save(customer);
	}

}
