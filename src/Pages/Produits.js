import { useParams } from "react-router-dom"
import { useCart } from "../Providers/CartContext"


export default function() {
    let { id } = useParams()
    let { cart } = useCart()
    
    return <h1>
    Articles {id}
    {cart.map((product) => {
        return <h2>{product}</h2>
    })}
    </h1>
} 