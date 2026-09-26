import type { ITestimonial } from "../constant";
import './TestimonialCard.css';

export function TestimonialCard({name, username, image, text}: ITestimonial) {
    return (
    <>
        <article className="card">
            <header className="cardHeader">
                <img src={image} alt="Profile Pic" className="avatar"/>
                <section className="namecontainer">
                    <h1 className="user-name">{name}</h1>
                    <p className="username">{username}</p>
                </section>
            </header>
            <section className="testimonialcontainer">
                <p className="testimonial">{text}</p>
            </section>
        </article>
    </>
  );
}