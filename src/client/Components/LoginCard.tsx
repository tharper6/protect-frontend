import * as React from 'react';

const LoginCard: React.SFC<ILoginCardProps> = (props) => {
    return (
        <form className="form-group col-md-8 border border-dark my-3 p-3" action="">
            <label htmlFor="">Email:</label>
            <input className="form-control" type="text" />
            <label htmlFor="">Password:</label>
            <input className="form-control" type="text" />
            <button className="form-control btn btn-info mt-3">Login</button>
        </form>
    )
}

export interface ILoginCardProps {

}

export default LoginCard;