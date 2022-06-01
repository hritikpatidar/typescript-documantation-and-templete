import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataTable } from '../Redux/ActionCreator/ActionCreator';

interface Idata {
    first_name: string
    last_name: string
    age: string | number
    email: string
    password: string
}
const initialState: Idata = {
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: ""
}

function Form() {
    //1. state/hooks
    const [data, setData] = useState<Idata>(initialState);
    const state = useSelector((state: any) => state)
    const dispatch = useDispatch()
    //console.log("state", state)

    const Navigate = useNavigate();

    //2. function defination
    let handalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log(data)
        // dispatch({ type: A, data });
        //console.log("mystate",state.user)
        let value = state.user;
        value.push(data)
        //console.log(value)
        dispatch(getDataTable(value))
        Navigate('/table')
    }
    let handalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log('okokok');
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value });

    }
    //console.log(data)
    //3. return statement/jsx
    return (
        <div className="container ">
            <div className='row'>
                <div className="col-6">
                    <form className="position-absolute top-50 start-50 translate-middle" onSubmit={handalSubmit}>
                        <h1>React form using typeScript</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                            <input type="texy" name="first_name" onChange={handalChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Last Name</label>
                            <input type="text" name="last_name" onChange={handalChange} className="form-control" id="exampleInputPassword2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword3" className="form-label">Age</label>
                            <input type="number" name="age" onChange={handalChange} className="form-control" id="exampleInputPassword3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword4" className="form-label">Email</label>
                            <input type="email" name="email" onChange={handalChange} className="form-control" id="exampleInputPassword4" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword5" className="form-label">Password</label>
                            <input type="password" name="password" autoComplete="on" onChange={handalChange} className="form-control" id="exampleInputPassword5" />
                        </div>
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
