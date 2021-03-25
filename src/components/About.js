import React from 'react';
import {useSpring, animated} from 'react-spring';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import education from '../constants/education';
import experiences from '../constants/experiences';

const About = () => {
    const [isActive, setIsActive] = React.useState(false);

    const getEducation = () => {
        let result = [];

        education.map(Education => {
            return result.push(
                <div className="card mb-3 bg-yellow">
                    <h5 className="card-header">{Education.title}</h5>
                    <div className="card-body text-white bg-navy">
                        <h6 className="card-title">{Education.school}</h6>
                        <p className="text-muted">{Education.start_date} - {Education.finish_date}</p>
                        <div className="expand w-50 mb-2">
                            <FontAwesomeIcon className="mx-1" icon={faArrowDown} size="lg"/>
                            Expand description
                        </div>
                        <div className="expandable">
                            <p className="card-text">{Education.description}</p>
                            <p className="card-text">{Education.final_project}</p>
                        </div>
                    </div>
                </div>
            );
        });

        return result;
    };

    const getExperiences = () => {
        let result = [];

        experiences.map(Experience => {
            return result.push(
                <div className="card mb-3 bg-yellow">
                    <h5 className="card-header">{Experience.title}</h5>
                    <div className="card-body text-white bg-navy">
                        <h6 className="card-title">{Experience.company}</h6>
                        <p className="text-muted">{Experience.start_date} - {Experience.finish_date}</p>
                        <div className="expand w-50 mb-2">
                            <FontAwesomeIcon className="mx-1" icon={faArrowDown} size="lg"/>
                            Expand description
                        </div>
                        <div className="expandable">
                            <p className="card-text">{Experience.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return result;
    };

    // Animations
    const featuredBlogProps = useSpring({
        opacity: 1,
        marginTop: 0,
        from: {opacity: 0, marginTop: -3500,},
    });

    return (
        <div className="container mt-3">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-navy">
                <div className="row px-0">
                    <div className="col-md-6">
                        <animated.h1 style={featuredBlogProps} className="display-4 fst-italic">Every day brings new
                            choices.
                        </animated.h1>
                        <animated.p style={featuredBlogProps} className="lead my-3">`All things are diffucult before
                            they are easy.`
                        </animated.p>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img className="image-fit" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="myself"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center">About Me</h3>
                    <p className="text-justify">My objectives are to develop myself as an employee as well as a
                        freelancer, learn new technologies and improve quality of my products.
                        As a junior developer, I constantly work on various projects, learning new solutions and
                        developing myself in programming. It is my great passion that I have discovered in myself and I
                        plan to pursue it.</p>
                    <p className="text-justify">I am open-minded, hardworking and reliable person with a strong
                        technical education, who
                        possesses self-discipline, ability to work as a team member, good communication skills. I am
                        well organized what is one of my greatest advantages.</p>
                    <p className="text-justify">I like video editing. I prefer to edit a film of my adventures or
                        vacations than take hundreds of
                        pictures. You can see some of my videos on my Youtube channel.</p>
                    <p className="text-justify">I really like sports especially football, hiking and mountain biking.
                        Maybe it is time for another ride...</p>
                    <p className="text-justify">If you need any further information, please do not hesitate to contact
                        me.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center">Experience</h3>
                    {getExperiences()}
                </div>
                <div className="col-md-6">
                    <h3 className="text-center">Education</h3>
                    {getEducation()}
                </div>
            </div>
        </div>
    );

};

export default About;
