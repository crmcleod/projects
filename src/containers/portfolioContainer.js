import React from 'react'
import ProjectCard from '../components/projectCard'
import burgers from '../assets/burgers.jpg'
import codebreakers from '../assets/codebreakers1.png'
import escape from '../assets/escape.png'
import friendo from '../assets/friendo.png'
import mh from '../assets/mh.jpg'
import pace from '../assets/pace.png'
import quizzo from '../assets/quizzo.png'
import seenit from '../assets/seenit.png'
import roz from '../assets/roz.png'

const PortfolioContainer = () => {
    return(
        <div id="portfolio-wrapper">
            <ProjectCard 
                title={ 'CodeBreakers' }
                body={ 'Codenames recreated as a browser game as part of a 6 day, 4 person sprint' }
                image={ codebreakers }
                gitHub={ 'https://github.com/crmcleod/CodeBreakers_game' }
                deployment={ 'https://crmcleod.github.io/CodeBreakers_game/' }
            />
            <br></br>
            <ProjectCard 
                title={ 'Friendo' }
                body={ 'A social media platform - based on the dating-app model - for connecting with new friends. Created during a 7 day, 5 person sprint' }
                image={ friendo }
                additionalStyle={ 'friendo' }
                gitHub={ 'https://github.com/crmcleod/Friendo-Social-App' }
            />
            <br></br>
            <ProjectCard 
                title={ 'SeenIt' }
                body={ 'A simple Vue.js app for searching the oMDB API and selecting films that you have seen. Created for a short homework project' }
                image={ seenit }
                gitHub={ 'https://github.com/crmcleod/SeenIt_oMDB_film_tracker' }
                deployment={ 'https://seen-it-omdb.herokuapp.com/' }
            />
            <br></br>
            <ProjectCard 
                title={ 'Machine Head API' }
                body={ 'An API serving information for the band Machine Head. Created as a small project, post CodeClan, to gain further familiarity with Spring Boot' }
                image={ mh }
                gitHub={ 'https://github.com/crmcleod/Machine_Head_band_API' }
                deployment={ 'https://machine-head-api.herokuapp.com/bands' }
            />
            <br></br>
            <ProjectCard 
                title={ 'Burger World' }
                body={ 'One of my first forays into DOM manipulation and Javascript with a fun aesthetic on my favourite theme, burgers 🍔' }
                image={ burgers }
                gitHub={ 'https://github.com/crmcleod/Favourite_burger_joint_tracker' }
                deployment={ 'https://condescending-kare-bb7195.netlify.app/' }
            />
            <br></br>
            <ProjectCard 
                title={ 'Pace' }
                body={ 'My first ever major solo project - a veterinary practice management system created with Ruby over a 6 day sprint' }
                image={ pace }
                gitHub={ 'https://github.com/crmcleod/Veterinary_practice_management_app' }
                deployment={ 'https://pace-vet-management-app.herokuapp.com/' }
            />
            <br></br>
            <div id="in-progress-wrapper">
                <h1 className='project-card in-progress'> Projects in progress </h1>
            </div>
            <br></br>

            <ProjectCard 
                title={ 'Escape the Ship' }
                body={ 'The beginnings of a React browser escape room game.' }
                image={ escape }
            />
            <br></br>
            <ProjectCard 
                title={ 'Q!' }
                body={ 'An application for building and sharing quizzes and polls. (Hobby tier Heroku dynos can take a while to spin up)' }
                image={ quizzo }
                gitHub={ 'https://github.com/crmcleod/poll_quiz_generator' }
                additionalStyle={ 'quizzo' }
                deployment={ 'https://baypluzz.herokuapp.com/' }
            />
            <br></br>
            <ProjectCard 
                title={ 'Rosalind Erskine - Journalism Portfolio' }
                body={ `A portfolio website to show off a journalist's extensive work.` }
                image={ roz }
                additionalStyle={ 'roz-web' }
                deployment={ 'https://roz-web.herokuapp.com/' }
            />
        </div>
    )
}

export default PortfolioContainer