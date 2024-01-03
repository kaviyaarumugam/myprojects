import React from 'react';
import './Home.css';

function Home(){
    return(
        <div>
        <div className='container'>
            <img  src = "https://images3.alphacoders.com/109/1097924.jpg" alt = "hbg"></img>
        
            <div className='center'>
                <h1>A World of Goodness</h1>
                <p>Discover the fresh exotics here!</p>
            </div>
           
        </div>
            
        <div className='head'>
           <center> 
                <h1>Explore our range of over 200 </h1> 
                <h1 className='head2'>fruits & vegetables</h1>
            </center>
        </div>
     
        <div className='row'>
            <div className='column'>
                <div>
                     <div>
                      <center>
                      <img src="https://madrasmandi.in/_next/image?url=https%3A%2F%2Fadmin.madrasmandi.in%2Fuploads%2Fwebsiteimage%2F131.png&w=1920&q=75" alt="Avatar" ></img>
                      <h4>Avocado(Butter Fruit)</h4>
                      <h5>Rs 198/No</h5>
                      
                    
                      <button className='butcart'><a href="./login">Add to cart</a></button>
                      <button className='butbuy'><a href="./login">Buy Now</a></button>
                      </center>
                    </div>
               </div>
           </div>
            <div className='column'>
                <div>
                     <div>
                      <center>
                      <img src="https://madrasmandi.in/_next/image?url=https%3A%2F%2Fadmin.madrasmandi.in%2Fuploads%2Fwebsiteimage%2F87.png&w=1920&q=75" alt="Avatar" ></img>
                      <h4>Brocoli</h4>
                      <h5>Rs 49/No</h5>
                      
                    
                      <button className='butcart'><a href="./login">Add to cart</a></button>
                      <button className='butbuy'><a href="./login">Buy Now</a></button>
                      </center>
                    </div>
               </div>
           </div>
            <div className='column'>
                <div>
                     <div>
                      <center>
                      <img src="https://madrasmandi.in/_next/image?url=https%3A%2F%2Fadmin.madrasmandi.in%2Fuploads%2Fwebsiteimage%2F466.png&w=1920&q=75" alt="Avatar" ></img>
                      <h4>Strawberries</h4>
                      <h5>Rs 150/Box</h5>
                      
                    
                      <button className='butcart'><a href="./login">Add to cart</a></button>
                      <button className='butbuy'><a href="./login">Buy Now</a></button>
                      </center>
                    </div>
               </div>
           </div>
            <div className='column'>
                <div>
                     <div>
                      <center>
                      <img src="https://madrasmandi.in/_next/image?url=https%3A%2F%2Fadmin.madrasmandi.in%2Fuploads%2Fwebsiteimage%2F161.png&w=1920&q=75" alt="Avatar" ></img>
                      <h4>Pomegranate Kabul</h4>
                      <h5>Rs 79/No</h5>
                      
                      <button className='butcart'><a href="./login">Add to cart</a></button>
                      <button className='butbuy'><a href="./login">Buy Now</a></button>
                      
                      </center>
                    </div>
               </div>
           </div>
        </div>

        <div className='btn1'>
            <button className='expbtn'><a href='/products'>Explore More</a></button>
        </div>

        <div className='farmer'>
            <center>
            <h2>For Farmers</h2>
            <h1>Our farmers are our heroes!</h1>
            <p>Cultivating the culture of fair trade since 1990. At Farm Fresh, we ensure every farmer earns a<br></br>
                 profit. We deliver goodness of food, heart and everything else that sets us apart!</p>
            </center>
        </div>

        <div className='farmerimg'>
            <div className='farmercol'>
                <center>
                <img src="https://madrasmandi.in/_next/image?url=%2Fassets%2Fimages%2Ffarmers%2Ffarmer1.jpg&w=384&q=75" alt="farmer1"></img>
                </center>
            </div>
            <div className='farmercol'>
                <center>
                <img src="https://madrasmandi.in/_next/image?url=%2Fassets%2Fimages%2Ffarmers%2Ffarmer2.jpg&w=384&q=75" alt="farmer12"></img>
                </center>
            </div>
            <div className='farmercol'>
                <center>
                <img src="https://madrasmandi.in/_next/image?url=%2Fassets%2Fimages%2Ffarmers%2Ffarmer3.jpg&w=384&q=75" alt="farmer3"></img>
                </center>
            </div>
            <div className='farmercol'>
                <center>
                <img src="https://madrasmandi.in/_next/image?url=%2Fassets%2Fimages%2Ffarmers%2Ffarmer4.jpg&w=384&q=75" alt="farmer4"></img>
                </center>
            </div>
        </div>

        </div>
    
    )
}
export default Home;