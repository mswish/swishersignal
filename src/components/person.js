import React from 'react'

export default function Person({ name, handle }){
    return (
        <div className='person-container'>
            <h1>{name}</h1>
            <h2>{handle}</h2>
        </div>
    )
}
