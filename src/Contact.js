import React from "react";
import './Contact.css';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoIosBusiness } from "react-icons/io";
import { TiBusinessCard } from "react-icons/ti";

function Contact()
{

    const handle=()=>{
        alert("We will contact you soon");
    }
    return(
        <div>
             <div className="container">
            <img src="https://strapiprod.knowlarity.com/uploads/contact_us_5a6756504e.jpg" alt="bg2"></img>
            <div className="center">
                <h1>Contact Us</h1>
            </div>
           </div>
           <div>
            <center>
            <h1>Get in touch with us for business</h1>
            <br></br>
            <p>Please call, email or visit us at the details given at the bottom. 
                Alternatively, you may fill out the form below and we will get back to you.</p>
                <br></br><br></br>

            <h3>Leave us your details below and we’ll get in touch with you</h3>
            <br>
            </br>
            <form className="conform">
                <MdDriveFileRenameOutline />
                <label>Name</label> 
                <input type="text"></input>
                <br></br><br></br>
                <IoMdContact />
                <label>Contact Number</label> 
                <input type="text"></input>
                <br></br><br></br>
                <IoIosBusiness />
                <label>Business Name</label> 
                <input type="text"></input>
                <br></br><br></br>
                <TiBusinessCard />
                <label>Business Type</label> 
                <input type="text"></input>
                <br>
                </br>
                <br></br>
                <button onClick={handle}>Let's Talk</button>
            </form>

                </center>
           </div>

        </div>
    )
}
export default Contact;