export interface propType{
    msg: string
}
export default function FOF(props: propType){
    return<h1>{props.msg}</h1>
}

