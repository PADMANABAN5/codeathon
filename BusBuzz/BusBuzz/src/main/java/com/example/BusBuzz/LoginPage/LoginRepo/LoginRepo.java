package com.example.BusBuzz.LoginPage.LoginRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.BusBuzz.LoginPage.LoginModel.RegisterPojo;
import com.example.BusBuzz.LoginPage.LoginModel.UserPojo;

@Repository
public interface LoginRepo extends JpaRepository<RegisterPojo, Integer>{

    @Query(value = "SELECT COUNT(*) FROM register_pojo WHERE Rusername = :username", nativeQuery = true)
    int countByRusername(@Param("username") String username);

    @Query(value = "SELECT COUNT(*) FROM register_pojo WHERE REamil = :email", nativeQuery = true)
    int countByREamil(@Param("email") String email);

    @Query(value = "select count(*) from register_pojo where reamil =:email and rpassword =:password", nativeQuery = true)
	int checkValid(@Param("email") String email,@Param("password") String password);
    
    @Query(value = "SELECT id FROM register_pojo WHERE Rusername = :username", nativeQuery = true)
    int findIdByUsername(@Param("username") String username);
  
}
