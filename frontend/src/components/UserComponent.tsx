import React from 'react';
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
    constructor(props: any)
    {
        super(props);
        this.state = {
            'username': '',
            'email': ''
        };

        this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    };

    handleUsernameInputChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        this.setState({ 'username': event.target.value });
    };

    handleEmailInputChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        this.setState({ 'email': event.target.value });
    };

    render(): React.ReactNode
    {
        return (
            <div className="User-main">
                <form className="User-form">
                    <label>
                        <input type="text" name="name" placeholder="Username" onChange={this.handleUsernameInputChange} />
                    </label>
                    <label>
                        <input type="text" name="name" placeholder="Email" onChange={this.handleEmailInputChange} />
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

