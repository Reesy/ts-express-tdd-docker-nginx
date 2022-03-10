import React from 'react';
import { UserAPI } from '../apis/UserAPI';
import '../styles/UserComponent.css';

interface UserComponentProps
{

};

interface UserComponentState
{
    username: string;
    email: string;
};

export default class UserComponent extends React.Component<UserComponentProps, UserComponentState>
{   

    userAPI: UserAPI ; 

    constructor(props: UserComponentProps)
    {
        super(props);
        this.state = {
            'username': '',
            'email': ''
        };

        this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.userAPI = new UserAPI();
    };

    handleUsernameInputChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        this.setState({ 'username': event.target.value });
    };

    handleEmailInputChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        this.setState({ 'email': event.target.value });
    };

    handleSubmit(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        this.userAPI.postUser(this.state.username, this.state.email)
            .then(response => {
                console.log("The response is: ", response);
            })  
            .catch(error => {
                console.log("The error is : ", error );
            });
    };

    render(): React.ReactNode
    {
        return (
            <div className="User-main">
                <form className="User-form"  onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="name" placeholder="Username" value={this.state.username} onChange={this.handleUsernameInputChange} />
                    </label>
                    <label>
                        <input type="text" name="name" placeholder="Email" value={this.state.email} onChange={this.handleEmailInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="User-info">
                    <p>Username: {this.state.username}</p>
                    <p>Email: {this.state.email}</p>
                </div>
            </div>
        )
    }
};

