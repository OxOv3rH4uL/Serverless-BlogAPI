import { Blog } from "../lib/types";
import { getPrisma } from "../lib/utils";

export async function createBlog(blog:Blog,id:number){
    try{
        const prisma = getPrisma();
        const b = await prisma.blog.create({
            data:{
                title:blog.title,
                content:blog.content,
                author:{
                    connect:{
                        id:id
                    }
                }
            }
        })
        return b;
    }catch(e){
        console.error(e);
        return e;
    }
}


export async function getBlogs(id:number){
    try{
        const prisma = getPrisma()
        const allBlog = await prisma.blog.findMany({
            where:{
                authorId:id
            }
        })
        return allBlog
    }catch(e){
        console.error(e);
        return e;
    }
}

export async function getBlog(id:number){
    try{
        const prisma = getPrisma()
        const b = await prisma.blog.findUnique({
            where:{
                id:id
            }
        })
        return b;
    }catch(e){
        console.error(e);
        return e;
    }
}

export async function updateBlog(blog:Blog , id:number){
    try{
        const prisma = getPrisma();
        const b = await prisma.blog.update({
            where:{
                id:id
            },
            data:{
                title:blog.title,
                content: blog.content
            }
        })
        return b;
    }catch(e){
        console.error(e);
        return e;
    }
}

export async function deleteBlog(id:number){
    try{
        const prisma = getPrisma();
        const b = await prisma.blog.delete({
            where:{
                id:id
            }
        })
        return b;
    }catch(e){
        console.error(e);
        return e;
    }
}