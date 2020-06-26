import React from 'react'

export default function Layout({ children }) {
    return (
    <div>
        <h1>This is a default header</h1>
        <div>{ children }</div>
    </div>
    )
}
