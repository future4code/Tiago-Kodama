import { useHistory } from "react-router-dom"
import { pathTripsDetailsPage } from '../../constants/paths'

export default function CardTripsToAdmin({object, handleRemoveButton}){
    const history = useHistory()
    const titles = Object.keys(object)



    return <div>
        {titles.map((title, index) => (
            <p key={index}>{title}: {object[title]}</p>
        ))}
        <button onClick={() => history.push(`${pathTripsDetailsPage}/${object.id}`)}>TripDetailsPage</button>
        <button onClick={() => handleRemoveButton(object.id)}>Deletar</button>
    </div>
}