import { useState } from "react"


const colors=["Pink","Red","Orange","White"]
function Trail(){
        const [color, setColor] = useState("No Color")
        return(
                <>
                        <h1>Trail Page the color is {color}</h1>
                        {/* <button onClick={()=>setColor(colors[0])}>change</button> */}
                        {colors.map((c,index)=>(
                                <button key={index} onClick={()=>setColor(c)}>{c}</button>
                        ))}
                </>
        )
}

export default Trail