import { ChangeEvent } from "react"

interface InputType{
    label:string,
    placeholder:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
export default function InputBox(props:InputType){
    return <div>
        <div className="font-bold text-left py-2">
            {props.label}
        </div>
        <input placeholder={props.placeholder} type={props.type || "text"}  className="w-80 px-2 py-1 border border-slate-200 rounded-sm" onChange={props.onChange}></input>
    </div>
}