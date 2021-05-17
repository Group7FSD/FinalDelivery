package com.group.capstone.Capstone.Project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "address_details")
public class Address {

	@Override
	public String toString() {
		return "Address [address_id=" + address_id + ", city=" + city + ", country=" + country + ", state=" + state
				+ ", street=" + street + ", zipcode=" + zipcode + "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
	@GenericGenerator(name = "native", strategy = "native")
	private int address_id;
	@Column(name = "city")
	private String city;
	@Column(name = "country")
	private String country;
	@Column(name = "state")
	private String state;
	@Column(name = "street")
	private String street;
	@Column(name = "zipcode")
	private String zipcode;

	public Address() {
		super();
	}

	public Address(String city, String country, String state, String street, String zipcode) {
		super();
		this.city = city;
		this.country = country;
		this.state = state;
		this.street = street;
		this.zipcode = zipcode;
	}

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
}
