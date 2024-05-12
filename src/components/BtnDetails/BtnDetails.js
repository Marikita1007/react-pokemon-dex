import './btnDetail.scss'
import {NavLink} from "react-router-dom";

const BtnDetails = ({ pokemonName }) => {
    return(
        <NavLink
            className="btn-details"
            to={'/pokemon/'+pokemonName}
        >
            Details
        </NavLink>
    )
}

export default BtnDetails;