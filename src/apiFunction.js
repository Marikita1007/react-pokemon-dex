//この関数を使いAPIでポケモンデッキをfetchする
export async function apiGetPokemons()
{
    return await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
        {method: 'GET'}
    ).then( response => response.json() );
}

// この関数を使いAPIで個々のポケモンを呼ぶ。idの代わりに名前を使っているのは名前が各々違うから。
export async function apiGetPokemonByName( name )
{
    return await fetch(
        `https://pokeapi.co/api/v2/pokemon/${ name }`,
        { method: 'GET' }
    ).then( response => response.json() );

}