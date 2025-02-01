import { z } from 'zod'

export const userSchema = z.object({
    username:z.string(),
    email:z.string().email(),
    password:z.string()
})

export const SigninSchema = z.object({
    email:z.string().email(),
    password:z.string()
})

export const blogSchema = z.object({
    title:z.string().max(30),
    content:z.string()
})
