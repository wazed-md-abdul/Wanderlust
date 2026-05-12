import { SignUpForm } from '@/components/signup/SignUpForm';
import { Card } from '@heroui/react';
import React from 'react';

const SignUpPage = () => {
    return (
        <>

        <div className='container mx-auto'>
                <Card>
                        <h1 className='flex justify-center items-center'>Please Sign Up</h1>
                        <SignUpForm />



                </Card>


        </div>
        
        </>
    );
};

export default SignUpPage;