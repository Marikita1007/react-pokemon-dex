import './header.scss'
import Nav from "../Nav/Nav";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setMessage} from "../../actions/pokemon";

const Header = () => {

    const { message } = useSelector(store => store.pokemonReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        if (message !== '')
        {
            setTimeout(() => {
                dispatch(setMessage({msg: ''}))
            }, 2000)
        }
    }, [message])

    return (
        <>
            <header id="main_header">
                <h1>PokéApp Header</h1>
                <Nav />
            </header>
            { message !== '' && <p>{message}</p> }
        </>
    )
}

export default Header;