import React from 'react';
import ProjectCard from '../ProjectCard';
import LiveDemoBtn from '../LiveDemoBtn';

const StyleMe = () => {
    const url = 'https://www.youtube.com/watch?v=SUtbYjUhQDU'

    const description = () => (
        <div>
            <h4>
                StyleMe
            </h4>
            <ul>
                <li>Built a UX driven interactive web application where users can catalogue and create personalized outfits</li>
                <li>Created a unique and usable UI offering enabling users to connect with community via interactive features</li>
                <li>Implemented custom JSON and RESTful API routers written in Ruby on Rails with PostgreSQL hosted on Heroku</li>
                <li>Executed good coding practices by producing clean, reusable and scalable algorithms in ES6, React.js framework</li>
                <li>Optimized speed by debugging memory leaks, developing reusable components and utilizing Hooks for data flow</li>
            </ul>
            <LiveDemoBtn url='https://style-me.netlify.app/' />
        
        </div>
    )

    return(
        <div className="des-card">
            <ProjectCard url={url} desc={description()}/>
        </div>
    )
}

export default StyleMe