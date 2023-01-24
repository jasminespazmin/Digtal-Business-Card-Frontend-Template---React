import './App.css';
import profile from './img/profile.jpg';
import github from './img/github.png';
import heart from './img/heart.png';
import linkedin from './img/linkedin.png';
import portfolio from './img/portfolio.png';
import twitter from './img/twitter.png';

function App() {
  return (
    <div className="App">
        <div className="InnerRoundedBox">
  
        
          <header className="AppHeader">

            <img src={profile} width="500px" className="ProfileImg" alt="profile" />

            <h1>JASMINE ALEXANDRA THOMAS</h1>
            <h3>FOUNDER AND CEO</h3>
            <h4>HUMM LOVE LLC</h4>
          </header>

          <body>
            <button className="LearnButton">Learn <bold>More</bold></button>
            <button className="JoinNow">Join <bold>Now</bold></button>
 
             <div className="ArticleDiv">
                <h1>ABOUT:</h1>
                <p>Creating a community of women who a like-minded in their purpose to improve their communities. </p>

                <h1>INTEREST:</h1>
                <p>Creating a community of women who a like-minded in their purpose to improve their communities. </p>
             </div>
          </body>

         <footer>
            <a href="URL"><img src={portfolio} alt="portfolio link" width="40" height="40"/><h1 className="glow">PORTFOLIO</h1></a>
            <a href="URL"><img src={github} alt="github link" width="40" height="40"/><h1 className="glow">GITHUB</h1></a>
            <a href="URL"><img src={linkedin} alt="linkedin link" width="40" height="40"/><h1 className="glow">LINKEDIN</h1></a>
            <a href="URL"><img src={twitter} alt="twitter link" width="40" height="40"/><h1 className="glow">TWITTER</h1></a>
            <a href="URL"><img src={heart} className="HeartIcon" alt="heart" width="40" height="40"/><h1 className="glow">HUMM LOVE</h1></a>

         </footer>
       </div>

    </div>
  );
}

export default App;
