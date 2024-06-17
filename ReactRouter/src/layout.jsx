import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export function Layout() {
    
    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    )
}


/*
This file has been created to keep the header and footer static by rendering
it once only, and only re-render those components which are to be changed
everytime user clicks on some link. This is an optimized way of making 
multi page apps.

In order to do this, react router DOM gives us "Outlet" function. It uses
all the layout above and below it as the base layout and only re-renders 
the layout contained within itself.
*/
