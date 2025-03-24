import { useContext } from "react"
import { myContext } from "../APIContext"

function ComponentThree() {
    const parentData = useContext(myContext)
    console.log("parentData----in Component3", parentData)
    return (
        <h1>component three</h1>
    )
}

export default ComponentThree