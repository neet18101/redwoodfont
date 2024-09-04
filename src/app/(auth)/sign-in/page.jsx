"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useToaster } from 'react-hot-toast';

import * as z from 'zod';
import { useRouter } from 'next/navigation';


export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const page = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [IsSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToaster();
  const router = useRouter();
 

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log("d");
      
    } catch (error) {
      
    }
  };
  return (
    <div>page</div>
  )
}

export default page