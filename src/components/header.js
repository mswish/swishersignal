import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'

export default function Header(){
    return (
        <div className={ headerStyles.header }>
            <Link to={'/'}>
                Home
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <Link to={'/blog'}>
                Blog
            </Link>
        </div>
    )
}       
