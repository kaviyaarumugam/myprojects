import React from "react";
import './Blogs.css';

function Blogs()
{
    return(
    <div>
         <div className="container">
            <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="bg2"></img>
            <div className="center">
                <h1>Blogs</h1>
                <br></br>
                <p>Check out our monthly blogs on fruits, vegetables and so much more!</p>
            </div>
         </div>

         <div class="row-b">
            <center><h1>Top Reads</h1></center>
           <div class="column-b">
             <img src="https://admin.madrasmandi.in/storage/blog-images/9ZDadHlKRitehfQREziDrznoMAYFHFFX4OiGOnqG.png" alt="card"></img>
             <h1><a href="https://madrasmandi.in/blogs/Call-for-a-community-meal">Call for a community meal - Farm Fresh</a></h1>
             <p>Call for a community meal - Farm Fresh shows how simple ingredients can create extraordinary dishes.</p>
             <p>DECEMBER 8,2023 &nbsp; 5 MINS READ</p>
           </div>
           <div class="column-b">
             <img src="https://admin.madrasmandi.in/storage/blog-images/kxiXLUZyUlKjZLUjV9thZax8hhrSCXeWiVRBj863.png" alt="card"></img>
             <h1><a href="https://madrasmandi.in/blogs/childhood-nostagia">Exploring Iconic Childhood Snacks- What was in your tiffin box?</a></h1>
             <p>Picture this: you stroll up to your old school gates rocking your backpack, water<br></br> bottle, and trusty tiffin -
                 it’s as if you’ve stepped back in time. We’re all suckers <br></br>for a little bit of ’90s nostalgia, aren’t we?</p>
             <p>DECEMBER 1,2023 &nbsp; 3 MINS READ</p>
           </div>
           <div class="column-b">
             <img src="https://admin.madrasmandi.in/storage/blog-images/wYi8sc2GHJxLpT7vmoNfcMqNNkmyOMaMDGXy1T8b.jpg" alt="card"></img>
             <h1><a href="https://madrasmandi.in/blogs/best-fruits-and-veggies-to-children">The Best Fruits and Vegetables to give your Children</a></h1>
             <p>Tough to find info on what fruits and veggies to give to your kid? Here's the solution</p>
             <p>AUGUST 12,2023 &nbsp; 5 MINS READ</p>
           </div>
          
        </div>
    </div>

    
    )
}
export default Blogs;