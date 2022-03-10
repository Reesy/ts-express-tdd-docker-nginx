import { IRequest } from "../wrappers/IRequest";
import { IRequestOptions } from "../wrappers/IRequestOptions";
import request from "../wrappers/request";

interface User 
{
    username: string,
    email: string
}
export class UserAPI
{
    private UserRequest : IRequest; 
    

    constructor()
    {
        this.UserRequest = new request();
    };


    async getUsers()
    {
        const options: IRequestOptions =
        {
            method: "GET",

        }

        const uri = "http://localhost:8000/api/v1/users";

        
        let serverResponse = await this.UserRequest.get(uri, options);  
        let roomArray: Array<User> = serverResponse.data;
        return roomArray;
      
    };

    async postUser(username: string, email:string)
    {

        let newUser: User = 
        {
            username: username,
            email: email
        };

        const options: IRequestOptions =
        {
            method: "POST",
            body: newUser,
            headers: {
                "Content-Type": "application/json"
            }
        }

        const uri = "http://localhost:8000/api/v1/users";

        let response = await this.UserRequest.post(uri, options);
        return response;
    };


};