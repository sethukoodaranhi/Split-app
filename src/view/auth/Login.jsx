import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import loginSchema from '../../validation.schema/login';
import loginImg from '../../assets/images/4059670.jpg'
import { useNavigate } from 'react-router-dom';
function Login() {
    const { register, handleSubmit, formState: { errors }, reset,setError } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const navigate=useNavigate()
    const users = [
        { id: 1, name: "Leanne Graham", password: "12345" },
        { id: 2, name: "Martin Lucas", password: "12345" },
        { id: 3, name: "Jason Bright", password: "12345" },
        { id: 4, name: "Sam Wills", password: "12345" },
        { id: 5, name: "John Lucas", password: "12345" },
    ];

    const loginHandler = (data) => {
        const {name,password}=data
        if (users.some((obj) => obj.name === name && obj.password === password)) {
            navigate('/dashboard')
        }else{
            setError('name',{message:"Invalid username or password"})
        }
    }
    

    return (
        <div className='d-flex align-items-center justify-content-center  login-container'>
            <div className='container shadow'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6  d-flex align-items-center justify-content-center login-input-container'>
                        <div className='w-100 p-4'>
                            <h1>Welcome Back</h1>
                            <p>Please enter your credentials</p>
                            <Form className='text-start' onSubmit={handleSubmit(loginHandler)}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" size='lg' {...register('name')} isInvalid={!!errors.name} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.name?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' size='lg' {...register('password')} isInvalid={!!errors.password} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.password?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button className="w-100 flex justify-center items-center"
                                    size="lg"
                                    type="submit"
                                >
                                    Login
                                </Button>

                            </Form>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div className='image-container'>
                            <img src={loginImg} className='w-100' alt='Login' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login