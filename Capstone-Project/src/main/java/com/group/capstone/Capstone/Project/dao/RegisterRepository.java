package com.group.capstone.Capstone.Project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group.capstone.Capstone.Project.entity.User;

public interface RegisterRepository extends JpaRepository<User, Integer> {

	public User findByEmail(String email);

	public User findByEmailAndPassword(String email, String password);

}
