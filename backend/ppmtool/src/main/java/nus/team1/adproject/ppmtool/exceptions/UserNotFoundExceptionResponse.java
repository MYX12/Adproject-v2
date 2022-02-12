package nus.team1.adproject.ppmtool.exceptions;

public class UserNotFoundExceptionResponse {

    private String UserNotFound;

    public UserNotFoundExceptionResponse(String userNotFound) {
    	UserNotFound = userNotFound;
    }

    public String getProjectNotFound() {
        return UserNotFound;
    }

    public void setProjectNotFound(String userNotFound) {
    	UserNotFound = userNotFound;
    }
}
