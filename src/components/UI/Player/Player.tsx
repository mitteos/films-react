import React, {FC} from 'react';
import {usePlayer} from "../../../hooks/usePlayer";

interface PlayerProps {
    filmId: string | undefined;
}

const Player: FC<PlayerProps> = ({filmId}) => {

    usePlayer()
    
    return (
        // todo: не изменяется filmId в компоненте после перехода из слайдера
        <div id="yohoho" data-resize="1" data-kinopoisk={filmId}></div>
    );
};

export default Player;