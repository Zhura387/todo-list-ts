import React from 'react';
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {

    const nav = useNavigate()
    const click = (): void => {
        nav('/')
    }

    return <>
        <h1>info</h1>
        <p>This is project was bild with typyscript and materializecss</p>
        <button className='btn' onClick={click}>back to list</button>
    </>
}