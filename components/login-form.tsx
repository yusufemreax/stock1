"use client"
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { setToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/api';

const formSchema = z.object({
  UserName: z.string().min(3),
  Password: z.string().min(1),
});

export function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      UserName: "",
      Password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await loginUser(values.UserName, values.Password);
      setToken(response.token, values.UserName);
      router.push('/');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  }

  return (
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='UserName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kullanıcı Adı</FormLabel>
              <FormControl>
                <Input placeholder='Kullanıcı Adınızı Giriniz' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Şifrenizi Giriniz' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Giriş</Button>
      </form>
    </Form>
  );
}
