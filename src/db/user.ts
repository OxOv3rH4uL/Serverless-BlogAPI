import { config } from "../lib/config";
import { User } from "../lib/types";
import { getPrisma } from "../lib/utils";


export async function createUser(user: User) {
    try {
      const prisma = getPrisma();
      const u = await prisma.user.create({
        data: {
          username: user.username,
          email: user.email,
          password: user.password,
        },
      });
  
      return u;
    } catch (e) {
      console.error("Prisma Error:", e);  
    //   return { error: e.message || "Internal server error" };
        return e;
    }
  }
  

export async function getUser(email:string,password:string){
    try{
        const prisma = getPrisma();
        const user = await prisma.user.findFirst({
          where: {
            AND: [
              { email: email },
              { password: password }
            ]
          }
        });        
        return user;
    }catch(e){
        return e;
    }
}
