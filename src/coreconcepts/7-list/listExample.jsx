export default function ListEvent(){
    const listarray = ['Apple', 'Bannana', 'Jackfruits']
    return <>
         <ul> 
                {
                   listarray.map((value, index)=>{
                        return <li key={index}>{value}</li>
                   })
                } 
         </ul>
        </>
}