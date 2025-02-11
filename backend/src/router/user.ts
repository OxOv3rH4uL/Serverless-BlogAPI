import { Hono,Context } from 'hono'
import { userSchema,SigninSchema } from '../lib/schema';
import { createUser, getUser } from '../db/user';
import { Jwt } from 'hono/utils/jwt';
import 'dotenv/config'

const userRouter = new Hono<{ Bindings: { JWT_SECRET: string} }>();;


userRouter.post('/signup', async (c:Context) => {
    const body = await c.req.json();
    const user = {
      "username":body.username,
      "email":body.email,
      "password":body.password
    }
  
    const safe = userSchema.safeParse(user);
  
    if(safe.success){
  
      const r:any = await createUser(user);
      if(r.code){
        if(r.meta.target[0] === "username"){
          c.status(500);
          return c.json({
            msg:"Username is already used"
          })
        }else if(r.meta.target[0] === 'email'){
          c.status(500);
          return c.json({
            msg:"Email is already used"
          })
        }
      }else{
        c.status(200);
        return c.json({
          msg:"User created successfully!",
          res:r
        })
      }
  
    }
})
  
userRouter.post("/signin" , async(c:Context)=>{
    const body = await c.req.json();
    const user = {
        "email":body.email,
        "password":body.password
    }
    const safe = SigninSchema.safeParse(user);
    if(safe.success){
      const r:any = await getUser(body.email,body.password);
      console.log(r);
      if(r.code){
        c.status(500);
        return c.json({
          msg:"Internal Server Error"
        })
      }else{
        const key = c.env.JWT_SECRET//this is not working for some reason. replace with actual key
        const payload = {
          id:r.id
        }
        const token = await Jwt.sign(payload,key)
        c.status(200);
        return c.json({
          token:token,
          res:r
        })
      }
    }
    
})


export default userRouter