package com.example.BusBuzz.LoginPage.LoginRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.BusBuzz.LoginPage.LoginModel.UserPojo;


@Repository
public interface UserInfoRepo extends JpaRepository<UserPojo, Integer>{
	
	@Query(value = "SELECT * FROM user_pojo WHERE id = (SELECT id FROM register_pojo WHERE reamil = :email AND rpassword = :password)", nativeQuery = true)
	UserPojo getUserInfo(@Param("email") String email, @Param("password") String password);
	
	@Modifying
	@Query(value = "UPDATE user_pojo SET wallet = :payment WHERE id = :id", nativeQuery = true)
	int addUserCash(@Param("id") int id, @Param("payment") int payment);
}
