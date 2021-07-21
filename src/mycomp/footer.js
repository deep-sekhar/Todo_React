import React from 'react'

export const Footer = () => {
    let footerStyle={
        position:"absolute",
        // top:"100",
        bottom:'0',
        width:"100%"
    }
    return (
        <footer className="bg-dark text-light py-3 my-3" >
            <p className="text-center my-3 ">
            CopyRight &copy; deep-sekhars todo list
            </p>
        </footer>
    )
}
