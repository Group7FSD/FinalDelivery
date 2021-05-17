package com.group.capstone.Capstone.Project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group.capstone.Capstone.Project.dao.RegisterRepository;
import com.group.capstone.Capstone.Project.entity.User;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository repo;

	public User saveUser(User user) {
		return repo.save(user);
	}

	public User fetchUserByEmail(String email) {
		return repo.findByEmail(email);
	}

	public User fetchUserByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}

}