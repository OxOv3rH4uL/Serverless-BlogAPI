import { Hono } from 'hono'
import { createUser } from './db/user'
import { userSchema } from './lib/schema'
import userRouter from './router/user'
import { jwt } from 'hono/jwt'
import blogRouter from './router/blogs'
import userMiddleware from './middleware/userMiddleware'



const app = new Hono()



app.route("/user", userRouter);

app.use("/blog/*",userMiddleware);

app.route("/blog", blogRouter);



app.get("/hi",async (c)=>{
  c.status(200);
  return c.text("Shit is working fyn")
})

app.get("/",async (c)=>{
  c.status(200);
  return c.text("Shit is working fyn brudaaaaaaaaw")
})



export default app
