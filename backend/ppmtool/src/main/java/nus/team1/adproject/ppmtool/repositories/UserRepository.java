package nus.team1.adproject.ppmtool.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import nus.team1.adproject.ppmtool.domain.Project;
import nus.team1.adproject.ppmtool.domain.User;


@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	
	User findUserByuserName(String userName);
	List<User> findByProjectIdentifier(String id);
	//User findUserByuserName(String id);
	@Override
    Iterable<User> findAll();
}
