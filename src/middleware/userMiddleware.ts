import { jwt,verify } from "hono/jwt";

const userMiddleware = async (c:any, next:any) => {
  try {
    
    const authHeader = c.req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return c.json({ message: "Unauthorized" }, 401);
    }

    
    const token = authHeader.split(" ")[1];

    
    const payload = await verify(token, "<secret here>");
    c.set("userId", payload.id);

    await next(); 
  } catch (error) {
    return c.json({ message: "Invalid or expired token" }, 401);
  }
};

export default userMiddleware;
