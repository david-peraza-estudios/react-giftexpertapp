import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    console.log( id, title, url );
    return (
        <div className="card animate__animated animate__fadeInLeftBig animate__delay-2s">
            <img src={ url } alt={ title } />
            <p>{title}</p>
            {/* {props.img.title} */}
        </div>
    )
}
