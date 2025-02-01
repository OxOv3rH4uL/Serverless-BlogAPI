import { Hono } from 'hono'
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from '../db/blog';
import { Blog } from '../lib/types';
import { blogSchema } from '../lib/schema';


type Bindings = {
    userId: string; 
};

const blogRouter = new Hono<{ Variables: Bindings }>();


blogRouter.get("/hi",async(c)=>{
    return c.json({
        msg:"Checking if jwt middleware is working fyn or not"
    })
})

blogRouter.get("/posts",async(c)=>{
    const id = c.get("userId");
    const blogs = await getBlogs(Number(id))
    c.status(200);
    return c.json({
        res:blogs
    })
})


blogRouter.post("/posts",async(c)=>{
    try{

        const id = c.get("userId");
        const body = await c.req.json();
        const blog : Blog = {
            title:body.title,
            content:body.content
        }

        const safe = blogSchema.safeParse(blog);
        if(safe.success){
            const r:any = await createBlog(blog,Number(id));
            if(r.code){
                c.status(500);
                return c.json({
                    msg:"Internal Server Error",
                    res:r
                })
            }else{
                c.status(200);
                return c.json({
                    msg:"Blog Created Successfully!",
                    res:r
                })
            } 
        }

    }catch(e){
        c.status(500);
        return c.json({
            msg:"Internal Server Error",
            res:e
        })
    }
})

blogRouter.get("/posts/:id",async(c)=>{
    try{

        const id = c.req.param("id");
        const blog:any = await getBlog(Number(id));
        if(blog.id){
            c.status(200);
            return c.json({
                res:blog
            })
        }else{
            c.status(500);
            return c.json({
                msg:"Internal Server Error"
            })
        }
    }catch(e){
        console.error(e);
        c.status(500);
        return c.json({
            res:e
        })
    }

})

blogRouter.put("/posts/:id",async(c)=>{
    try{
        const id = c.req.param("id");
        const body = await c.req.json();
        const blog: Blog = {
            title:body.title,
            content:body.content
        }
        const safe = blogSchema.safeParse(blog);
        if(safe.success){
            const up:any = await updateBlog(blog,Number(id));
            if(up.code){
                c.status(500);
                return c.json({
                    error:up
                })
            }else{
                c.status(200);
                return c.json({
                    msg:"Updated Successfully!",
                    res:up
                })
            }
        }

    }catch(e){
        c.status(500);
        return c.json({
            error:e
        })
    }
})


blogRouter.delete("/posts/:id",async(c)=>{
    try{
        const id = c.req.param("id");
        const d:any = await deleteBlog(Number(id));
        if(d.code){
            c.status(500);
            return c.json({
                error:d
            })
        }else{
            c.status(200);
            return c.json({
                msg:"Deleted Successfully!",
                res:d
            })

        }

    }catch(e){
        c.status(500);
        return c.json({
            error:e
        })
    }
})


export default blogRouter