import React, { Component } from "react";

class Home extends Component{

    render(){
        return(
            <div className="site-wrap" id="home-section">

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>



      <header className="site-navbar site-navbar-target" role="banner">

        <div className="container">
          <div className="row align-items-center position-relative">

            <div className="col-3 ">
              <div className="site-logo">
                <h1>Help Recover</h1>
              </div>
            </div>

            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white"></span></a></span>

              

              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li><a href="about.html" className="nav-link">About</a></li>
                  <li><a href="#" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>

            
          </div>
        </div>

      </header>

    <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{
    backgroundImage: "url(" + "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=6&h=650&w=940" + ")"
    }}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="mb-3">Help Recover</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
              <p><a href="#" className="btn btn-primary">Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="img-years">
              <img src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&dpr=6&h=650&w=940" alt="Image" className="img-fluid" />
              <div className="year">
                <span>1 <span>year in <br />excellent service</span></span>
              </div>
            </div>

          </div>
          <div className="col-lg-5 ml-auto pl-lg-5 text-center">
            <h3 className="text-red text-center">High Quality services</h3>
            <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
            <p><a href="#" className="btn btn-primary">Download the App</a></p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5 section-2-title">
          <div className="col-md-6">
            <h3 className="text-center">Meet Our Team</h3>
            <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
          </div>
        </div>
        <div className="row align-items-stretch">

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="Image6"
                 className="img-fluid" />
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Patrick Tchoupe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="Image5"
                 className="img-fluid" />
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Tresor Tekadam</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="Image1"
                 className="img-fluid" />
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Bilel Bouqouyoue</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="Image2"
                 className="img-fluid" />
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Sanglier Joachim</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src='http://ssl.gstatic.com/accounts/ui/avatar_2x.png' alt="Image3"
                 className="img-fluid" />
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Degives Florian</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src='http://ssl.gstatic.com/accounts/ui/avatar_2x.png' alt="Image3"
                 className="img-fluid" />
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Martin Perdaens</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="Image4"
                 className="img-fluid" />
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Sebastien Fantuzzi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


    

    <div className="site-section section-3" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(" + "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=6&h=650&w=940" + ")" }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-7 text-center mb-5">
            <h2 className="text-white primary-color-icon text-center">Application sécurisée</h2>
            <p className="lead text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo doloribus, suscipit libero, voluptate aliquam.</p>
            <p><a href="#" className="btn btn-primary">Contact Us Now</a></p>
          </div>
        </div>
      </div>
    </div>

    

    <footer className="site-footer">
      <div className="container">
      <div class="row pt-2 mt-2 text-center">
          <p>
          <a href="#">Politique de confidentialité </a>
          <a href="#">Termes et conditions</a>
          </p>
      </div>
        <div className="row pt-2 mt-2 text-center">
            <div>
              <p>
            Copyright &copy; {new Date().getFullYear()} Help Recover all rights reserved | This site is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://github.com/tresor-ruph/projet-Integration" target="_blank" >Group 4</a>
            </p>
            </div>
        </div>
      </div>
    </footer>

    </div>
        )
}
}

export default Home;