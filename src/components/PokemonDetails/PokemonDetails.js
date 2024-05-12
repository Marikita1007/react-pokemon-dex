//後でこの内容を変更
import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Pokemon Details</h2>
            <p>Pokemon ID: {id}</p>
            {/* その他の詳細情報を表示するコンポーネントを追加 */}
        </div>
    );
};

export default PokemonDetails;
