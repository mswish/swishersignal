import React from 'react'
import postStyles from './post-layout.module.css'
import Header from '../components/header'

export default function Layout({ children }) {
    return (
        <>
        <Header />
        <div className={postStyles.container}>
            <h1>This is the post layout</h1>
            <div>{ children }</div>
        </div>
        </>
    )
}
