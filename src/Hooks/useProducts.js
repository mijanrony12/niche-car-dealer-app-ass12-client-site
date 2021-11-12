import axios from "axios"
import { useEffect, useState } from "react"


const useProducts = () => {
   const [products, setProducts]=useState([])
    useEffect(() => {
        axios.get('https://stormy-reef-80779.herokuapp.com/products')
            .then(res => {
            setProducts(res.data)
        })
    }, [])
    return [products, setProducts]
}

export default useProducts;