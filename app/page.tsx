import React, { useEffect } from 'react';
import {LoginForm} from '@/components/login-form';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export default function Home() {
  return (
    

    <div className="container mx-auto py-10">
        Home
    </div>
   
  );
};

