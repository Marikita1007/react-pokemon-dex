import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPokemons} from "./actions/pokemon";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import { apiGetPokemons } from "./apiFunction";
import Logs from "./views/Logs";
import Team from "./views/Team";

function App() {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0', { method: 'GET' })
    //         .then(response => response.json())
    //         .then(data => {
    //             const APIPokemons = data.results;
    //             dispatch(setPokemons( {apiPokemons:APIPokemons}));
    //         });
    // }, []);

    useEffect(() => {
        apiGetPokemons()
            .then( data => {
                let APIPokemons = data.results;
                dispatch( setPokemons( { pokemons: APIPokemons } ) )
            })
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <main id="main_content">
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/team'} element={<Team />}/>
                        <Route path={'/logs'} element={<Logs />}/>
                        <Route path={'/pokemon/:name'} element={<Pokemon />} />
                        <Route path={"*"} element={ <p>404</p> } /> {/*サインは全てのルートでアクセス可能の意味だから404は一番下に書く*/}
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
