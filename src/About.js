import React from "react";
import './About.css';

function About()
{
    return(
        <div>
            <div className="container">
            <img src="https://img.freepik.com/premium-photo/vegetables-black-wood-background-vegetarian-organic-food-banner-cooking-ingredient-carrot-tomatoes-cucumber-pepper-broccoli-onion-top-view-copy-space-created-with-generative-ai-tools_97843-14639.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais" alt="bg2"></img>
            <div className="center">
                <h1>About Us</h1>
                <br></br>
                <p>As enablers of change, what we hope to achieve is access to good and fresh produce for everyone. 
                    We believe in fair prices and hold our farmers on pedestals - as they should be.</p>
            </div>
           </div>

           <div className="story">
            <div className="storycol">
                <h1>Our Story</h1>
                <p>Welcome to the ’90s. India is seeing a boom in technology. We’re paving the path for the future. Bell bottom jeans are the in thing, and the disco revolution has taken us by storm. But there’s one group of people who aren’t grooving to the beat. The farmers don’t yet have the knowledge, 
                    or equipment to farm anything other than paddy and wheat. But the soil is fresh, and the market is ripe.</p><br></br>
                <p>Enter Shri Annamalai Agro Products Pvt Ltd Products - the parent company of Farm fresh that started by supplying farm equipment, credit, and seeds to plant vegetables in the belief that this could give the farmers confidence in them and hopefully turn into a profit. The small population of Madras then was enough to keep the wheels of supply and demand churning. And slowly, the business grew. Today, we have over 1000+ farmers 
                    that are part of this growing family that helps us supply to bigger partners and companies like Nissan.</p><br></br>
                    <p>Farm Fresh was born in 2020 with one goal – to connect our farmers to our customers, to you! With the wealth of knowledge gained from our farmers and partners, we built this platform in the hope to keep fair trade 
                        alive and support the backbone of our country, our farmers!</p>
            </div>
            <div className="storycol">
                <img src ="https://madrasmandi.in/assets/images/our-story.jpg" alt='storyimg'></img>
            </div>
           </div>

           <div className="story1">
               <div className="storycol1">
                <img src="https://madrasmandi.in/assets/images/love-food.png" alt="storyimg1"></img>

               </div>
               <div className="storycol1">
                 <h1>We love food. And here’s why...</h1>
                 <p>We all know that there are certains dishes who’s name itself brings about a cheer in our taste buds. But what makes these dishes great? Of course it’s the way it’s cooked, but it’s also about the quality of ingredients used in making them. That’s why we strive to bring you the freshest 
                    and best fruits and vegetables plucked just 12 hours before it reaches your home.</p>
               </div>
           </div>
        </div>
    )
}
export default About;