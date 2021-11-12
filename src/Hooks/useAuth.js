import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

//create a useauth hooks
const useAuth = () => {
   return useContext(AuthContext)
}

export default useAuth;