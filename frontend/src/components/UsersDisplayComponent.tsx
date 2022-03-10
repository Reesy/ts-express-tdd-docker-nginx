
import React from 'react';


interface UsersDisplayComponentProps
{
    username: string;
    email: string;
};

interface UsersDisplayComponentState
{

};

export default class UsersDisplayComponent extends React.Component<UsersDisplayComponentProps, UsersDisplayComponentState>
{
    render(): React.ReactNode
    {
        return (
            <div>

            </div>
        )
    }

}