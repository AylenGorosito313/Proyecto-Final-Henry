import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/prueba/pruebaSlider";

function Home (){
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.prueba)

    useEffect(() => {
        dispatch(addUser(['Daniel', 'Pablo', 'Macarena', 'Aylen', 'K-Itzel', 'Mauro', 'LOS DEMAS NO ME SE SUS NOMBRES']))
    },[dispatch])
return(
    <div>
        <h1>Proyecto final Henry ---tamplate</h1>
        <h2>integrantes: {users && users.map(ele => ele).join(', ')}</h2>
        <h1>Primer commit a develop</h1>
    </div>
)
}
export default Home