package nus.team1.adproject.ppmtool.web;

import nus.team1.adproject.ppmtool.domain.Project;
import nus.team1.adproject.ppmtool.domain.ProjectTask;
import nus.team1.adproject.ppmtool.domain.User;
import nus.team1.adproject.ppmtool.services.MapValidationErrorService;
import nus.team1.adproject.ppmtool.services.ProjectMemberService;
import nus.team1.adproject.ppmtool.services.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/member")
@CrossOrigin
public class MemberController {

    @Autowired
    private ProjectTaskService projectTaskService;
    @Autowired
    private ProjectMemberService pmService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


//    @PostMapping("/{project_id}/{user_name}")
//    public ResponseEntity<?> addMembertoProject(@PathVariable String project_id,@PathVariable String user_name){
//
//        User newmember=pmService.addProjectMember(project_id, user_name);
//        return new ResponseEntity<User>(newmember, HttpStatus.CREATED);
//
//    }
    @PostMapping("/{project_id}/{user_name}")
    public ResponseEntity<?> addMembertoProject(@PathVariable String project_id,@PathVariable String user_name){

        User newmember=pmService.addProjectMember(project_id, user_name);
        return new ResponseEntity<User>(newmember, HttpStatus.CREATED);

    }
    @RequestMapping(value="/register",method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@Valid @RequestBody User user, BindingResult result)
    {
    	ResponseEntity<?> errorMap=mapValidationErrorService.MapValidationService(result);
    	if(errorMap!=null) return errorMap;
    	pmService.saveUser(user);
		return new ResponseEntity<User>(user,HttpStatus.CREATED);
    }
    
    //changes!!!!
    @RequestMapping(value="/edit",method = RequestMethod.PATCH)
    public ResponseEntity<?> updateUser(@Valid @RequestBody User user, BindingResult result)
    {
    	ResponseEntity<?> errorMap=mapValidationErrorService.MapValidationService(result);
    	if(errorMap!=null) return errorMap;
    	pmService.saveUser(user);
		return new ResponseEntity<User>(user,HttpStatus.CREATED);
    }
    
    
    @GetMapping("/user/{username}")
    public User findUserByname(@PathVariable String username){
    	
    	return pmService.findUserByusername(username);
    }
    

    @GetMapping("/{project_id}")
    public Iterable<User> getAllMember(@PathVariable String project_id){
    	
    	return pmService.findMemberByProjectId(project_id);

    }
    
    
    
    @GetMapping("/all")
    public Iterable<User> getAllUsers(){
        return pmService.findAllUsers();

    }

    @GetMapping("/{project_id}/{user_name}")
    public ResponseEntity<?> getMember(@PathVariable String project_id, @PathVariable String user_name){
    	User member=pmService.findMemberByProjectIdName(project_id, user_name);
        return new ResponseEntity<User>( member, HttpStatus.OK);
    }


    /*@PatchMapping("/{project_id}/{user_name}")
    public ResponseEntity<?> updateMember(@Valid @RequestBody User updatedmember, BindingResult result,
                                               @PathVariable String project_id, @PathVariable String user_name ){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;
        
        User member=pmService.updateByProjectIdName(updatedmember, project_id, user_name);

        return new ResponseEntity<User>(member,HttpStatus.OK);

    }*/

    @DeleteMapping("/{project_id}/{user_name}")
    public ResponseEntity<?> deleteMember(@PathVariable String project_id, @PathVariable String user_name){
    	pmService.deletePTByProjectIdName(project_id, user_name);
    	
        return new ResponseEntity<String>("Member "+user_name+" was deleted successfully", HttpStatus.OK);
    }

    @PostMapping("/{user_name}/remove")
    public ResponseEntity<?> removeMember(@PathVariable String user_name){

     pmService.RemoveMember(user_name);
     return new ResponseEntity<String>("Member "+user_name+" was removed successfully", HttpStatus.OK);

    }
}