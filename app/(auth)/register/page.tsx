// pages/register.tsx
import React from 'react';
import {RegisterForm} from '@/components/register-form';

const RegisterPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1>Register Page</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
