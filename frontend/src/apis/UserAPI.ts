import { IRequest } from "../wrappers/IRequest";
import { IRequestOptions } from "../wrappers/IRequestOptions";
import request from "../wrappers/request";

interface User 
{
    name: string,
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

    async postUser(_name: string, _email: string)
    {

        let newUser: User = 
        {
            name: _name,
            email: _email
        };

        const options: IRequestOptions =
        {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const uri = "http://localhost:8000/api/v1/user";

        let response = await this.UserRequest.post(uri, newUser, options);
        return response;
    };


};