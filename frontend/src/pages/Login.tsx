import { Auth } from "../components/pages/Auth"
import { Quote } from "../components/pages/Quote"

export function Login(){
    return <>
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <Auth type="signin"/>
        </div>
        <div className="invisible lg:visible">
        <Quote/> 
        </div>
    </div>
    </>
}