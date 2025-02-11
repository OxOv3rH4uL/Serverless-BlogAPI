export interface signUp {
    username:string,
    email:string,
    password:string
}

export interface blogCard{
    id:number,
    title:string,
    content:string,
    author:{
        username:string
    }
}

export interface blogProps{
    title:string,
    content:string,
    username:string
}

