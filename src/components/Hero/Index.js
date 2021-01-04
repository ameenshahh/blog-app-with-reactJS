import React from 'react'
import Logo from '../Logo/Index'
import Navbar from '../Navbar/Index'
import Card from '../UI/Card/Index'
import './Style.css'

const Hero = () => {
    return (
        <div>
            <Card>
                <div style={{ padding: '50px 0' }}>
                    <Logo />
                </div>
                <Navbar />
            </Card>
        </div >
    )
}

export default Hero
