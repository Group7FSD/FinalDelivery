package com.group.capstone.Capstone.Project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group.capstone.Capstone.Project.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

}
