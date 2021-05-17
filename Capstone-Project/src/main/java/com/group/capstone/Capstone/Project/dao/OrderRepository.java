package com.group.capstone.Capstone.Project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group.capstone.Capstone.Project.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

}
