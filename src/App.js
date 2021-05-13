import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'Consider this things before moving to your new home',
    },
    {
      title: 'Consider this things before moving to your new home',
    },
    {
      title: 'Consider this things before moving to your new home',
    },
    {
      title: 'Consider this things before moving to your new home',
    }
    
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
    <a class="navbar-brand" href="blog.html"><img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-logo.png" alt=" "></img></a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span class="fa fa-bars"></span>
</button>
      
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
          <a class="nav-link" href="blogging-tools.html">Blogging Tools</a>
                </li>
                <li class="nav-item">
                <a className="nav-link js-scroll-trigger" href="index.html">Our Services</a>
                </li>
                <li class="nav-item">
                <a className="nav-link js-scroll-trigger" href="https://www.google.com">Google</a>
                </li>
                <li class="nav-item dropdown">
                <a className="nav-link js-scroll-trigger" href="index.html">Internet Marketing</a>
                  <li class="nav-item">
                  
                </li>
                <li class="nav-item ">
                <a className="nav-link js-scroll-trigger" href="index.html">Advertise with us</a>
                  
              </li>
              <li class="nav-item ">
                <a className="nav-link js-scroll-trigger" href="index.html">Contact us</a>
                  
              </li>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
        <h1>Smart marketing <br></br>starts here</h1>
        <h4>Join over 150,000 marketing managers who get our best digital marketing insights, strategies and tips delivered straight to their inbox.</h4>
        <form action="" method="">
          <div class="service-form-box">
            <div class="form-group">
              <input type="email" name="" class="form-control" placeholder="ENTER YOUR WORK EMAIL"></input>
            </div>
            <div class="submit-btn">
              <button type="submit" class="btn arrow-btn red-btn">Subscribe</button>
            </div>
          </div>
        </form> 
        </div>
      </div>
      
      
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">WEB DESIGN</h4>

        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">WEB DEVELOPMENT</h4>
          
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">DIGITAL MARKETING</h4>
          
        </div>
        
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          
        </div>
      </div>
     
                  
                 
                
              
            
           
                
                  
            
            
                  
            
            
          
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
          <h3><a href="single-blog.html">Top Software Development Companies in London – Compare Quotes</a></h3>
                  <p class="blog-desc">Kickstart the growth of your business with a professionally designed website and software development services offered by Logicsofts, one of the leading software development</p>
           
                  <a href="single-blog.html" class="btn btn-white arrow-btn">Read more</a>
                  <div class="blog-list-author">
                    <div class="blog-author-img">
                      <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-1.png" alt=""></img>
                    </div>
                    <div class="blog-author-name">
                      <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                    </div>
                  </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            
          <h4>As featured on Linkio Top SEO Agencies</h4>
                    <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/linkio.png" alt=""></img>
                  
                  <div class="">
                    <h4>As featured on Feedspot Top 100 UK Marketing Blogs</h4>
                    <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/feedspot.png"alt=""></img>
                  </div>
            
              
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
          <h3>Recent Blog</h3>
                    <ul>
                      <li><a href="#">Top Software Development Companies in London – Compare Quotes</a></li>
                      <li><a href="#">What is Web Application Development – A Beginner’s Guide</a></li>
                      <li><a href="#">The Ultimate Guide to Outsource Web Development</a></li>
                      <li><a href="#">Web Developer vs Software Developer – What is the Difference?</a></li>
                      <li><a href="#">The Ultimate Guide to Micro Influencers in the UK 2020</a> </li>
                    </ul>
            
              
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Please Visit Us</p>
        </div>
      </div>
    </div>
  </section>

  
  

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright - 2020-2021 All Right Reserved - Logicsofts Australia Ptv Ltd. - ABN29611694529</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            
            
          </ul>
        </div>
       
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
