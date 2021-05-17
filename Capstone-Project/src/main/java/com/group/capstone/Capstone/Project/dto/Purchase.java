package com.group.capstone.Capstone.Project.dto;

import com.group.capstone.Capstone.Project.entity.Address;
import com.group.capstone.Capstone.Project.entity.Customer;
import com.group.capstone.Capstone.Project.entity.Order;

public class Purchase {
	@Override
	public String toString() {
		return "Purchase [customer=" + customer + ", address=" + address + ", order=" + order + "]";
	}

	private Customer customer;
	private Address address;
	private Order order;

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Purchase(Customer customer, Address address, Order order) {
		super();
		this.customer = customer;
		this.address = address;
		this.order = order;
	}

	public Purchase() {
		super();
	}

}
