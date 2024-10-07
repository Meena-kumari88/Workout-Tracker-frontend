import React from 'react';
import Navbar from './Navbar'; 
import Footer from './ Footer'; 
import { Link } from 'react-router-dom'; 
import './Home.css';

function Home() {
  return (
    <>
    <Navbar />
      <div className="home">
        <div className="home-content">
          
        </div>
        <h1 id='explore'>Your Health, Your Priority</h1>
        <div className="card-container" >
          <div className="card">
            <img src="https://www.shutterstock.com/image-photo/beautiful-athletic-couple-cyclists-train-600nw-2277366227.jpg" alt="Card 1" className="card-image" />
            <h2 className="card-title">Cycling</h2>
            <p className="card-description">A cardiovascular workout that can be done outdoors on a bike or indoors on a stationary bike. It's great for building endurance and strength in the lower body.</p>
            <Link to="https://youtu.be/0MLnC3bzXgQ?si=h1ho8dGx9t3d27W6" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/free-photo/full-length-happy-sportswoman-jogging-road-morning-copy-space_637285-3764.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid" alt="Card 2" className="card-image" />
            <h2 className="card-title">Running</h2>
            <p className="card-description">A high-impact aerobic exercise that helps improve cardiovascular health, endurance, and leg strength. It can be done outdoors on trails or roads or on a treadmill.</p>
            <Link to="https://youtu.be/-FAEPOaYsB0?si=O0NjrASDLgrxpbVf" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://w0.peakpx.com/wallpaper/304/155/HD-wallpaper-yoga-gym-yoga-class-postures-exercises-healthy-lifestyle.jpg" alt="Card 3" className="card-image" />
            <h2 className="card-title">Yoga</h2>
            <p className="card-description">A low-impact exercise focusing on flexibility, balance, and mental well-being. It includes various postures, breathing techniques, and meditation practices.</p>
            <Link to="https://youtu.be/m756Gz8de4M?si=siNGQIKiKB0w5HEd" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/free-photo/smiley-people-having-fun-zumba-class_23-2149074872.jpg" alt="Card 4" className="card-image" />
            <h2 className="card-title">Zumba</h2>
            <p className="card-description">A dance-based workout that combines high-energy music with choreographed dance moves. It’s a fun way to improve cardiovascular fitness and coordination.</p>
            <Link to="https://youtu.be/F4BJst5d9Ac?si=s5-irgDLawH06S8T" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://cdn-ilbgkif.nitrocdn.com/HvPNQmyCAUAQzwSksziLiCJlnacrlowy/assets/images/optimized/rev-1119789/vasatrainer.com/wp-content/uploads/2024/08/Swimming-3-scaled.jpg" alt="Card 4" className="card-image" />
            <h2 className="card-title">Swimming</h2>
            <p className="card-description">A full-body workout that builds strength and endurance while being easy on the joints. It engages multiple muscle groups and is great for cardiovascular health.</p>
            <Link to="https://youtu.be/nlGsZTsZaFc?si=kSWy15msX3Q69j0r" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D" alt="Card 4" className="card-image" />
            <h2 className="card-title">Strength Training</h2>
            <p className="card-description">Involves lifting weights or using resistance bands to build muscle strength and endurance. It can be done in a gym or at home with minimal equipment.</p>
            <Link to="https://youtu.be/6gKaoPofs6k?si=Fh2NoEFDbio9GS_9" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://c4.wallpaperflare.com/wallpaper/539/163/791/workout-exercises-pilates-elongation-wallpaper-preview.jpg" alt="Card 4" className="card-image" />
            <h2 className="card-title">Pilates</h2>
            <p className="card-description">A low-impact workout that focuses on core strength, flexibility, and overall body awareness. It uses controlled movements and can be performed on a mat or using specialized equipment.</p>
            <Link to="https://youtu.be/Q-n2SOnyr1Y?si=nGF3tg_3kYXuKsyq" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://cdn.centr.com/content/11000/10780/images/landscapewidedesktop1x-36534e086d6a3a1eb0b86af4b3fc1a22-lz-ap-hilit-inline-1-169-21260065.jpg" alt="Card 4" className="card-image" />
            <h2 className="card-title">HIIT (High-Intensity Interval Training)</h2>
            <p className="card-description">A time-efficient workout that alternates between short bursts of intense exercise and brief rest periods. It can improve cardiovascular fitness and burn calories quickly.</p>
            <Link to="https://youtu.be/Ir83IWRVTOw?si=bKKKy0SjvZSQQl4x" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://media.glamour.com/photos/56959c74d9dab9ff41b2f7c6/master/pass/health-fitness-2015-08-bollyx-image-main.jpg" alt="Card 4" className="card-image" />
            <h2 className="card-title">Dance Fitness</h2>
            <p className="card-description">Classes that incorporate various dance styles, like hip-hop or salsa, to create a fun and engaging workout that improves coordination and cardiovascular fitness.</p>
            <Link to="https://youtu.be/v3SGmJPDNVw?si=IrD6Kxowdl8CUrL0" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?cs=srgb&dl=pexels-leonardho-1552242.jpg&fm=jpg" alt="Card 4" className="card-image" />
            <h2 className="card-title">CrossFit</h2>
            <p className="card-description">A high-intensity workout that combines elements of weightlifting, cardio, and functional movements. It focuses on building strength and conditioning through varied workouts.</p>
            <Link to="https://youtu.be/n1WHcyEZO-Q?si=V7bc539xxFgI_gnw" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://media.istockphoto.com/id/1281286848/photo/kickboxing-woman-in-activewear-and-red-kickboxing-gloves-on-black-background-performing-a.jpg?s=612x612&w=0&k=20&c=KjmJS1x8dwNJHHDEgt-foS9FJcOSc1UtvuNC--7ekSY=" alt="Card 4" className="card-image" />
            <h2 className="card-title">Kickboxing</h2>
            <p className="card-description">A martial arts-inspired workout that combines punches, kicks, and other movements for a full-body workout. It improves cardiovascular fitness, strength, and coordination.</p>
            <Link to="https://youtu.be/SbYCLWaWGqE?si=8ZWsVIqtpQUgL3pV" target='_blank' className="view-more" >View</Link>
          </div>
          <div className="card">
            <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/rowing-exercising-gym-1296x728-header.jpg?w=1155&h=1528" alt="Card 4" className="card-image" />
            <h2 className="card-title">Rowing</h2>
            <p className="card-description">A low-impact, full-body workout that can be done on a rowing machine or in a boat. It builds strength and endurance, particularly in the upper body and core.</p>
            <Link to="https://youtu.be/OuF2yG5lp9o?si=kTs67P1FXizPrc3f" target='_blank' className="view-more" >View</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  );
}

export default Home;
