window.onload = function (e) {
  $(document).ready(function () {
    $('.outer-container header').append(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <p class="ml-2 mb-0 jumbo-mail" style="font-size: 14px;padding-left: 14px;">Contact Email <a
            href="mailto:vibhaawadh@gmail.com">vibhaawadh@gmail.com</a>
        </p>
        <div class="login-area">
          <a href="registration.html"><i class="fa-solid fa-user"></i> New Registration</a>
          <a class="seperator" data-bs-toggle="modal" data-bs-target="#myModal" href="##"><i
              class="fa-solid fa-lock"></i> Sign In</a>
        </div>
      </div>
    </div>


    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center justify-content-center" href="#">
          <div><img class="logo" src="images/vibha bharati logo2.jpg" alt="error"></div>
          <div><span>VIBHA UP (AWADH)</span></div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav" style="justify-content: end;">
          <ul class="navbar-nav">
            <li class="nav-item position-relative"> <a class="nav-link" href="index.html">Home </a> </li>
            <li class="nav-item dropdown">
              <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">About Us</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="about.html"> About Us</a></li>
                <li><a class="dropdown-item" href="aims.html"> Aims And Objectives </a></li>
                <li><a class="dropdown-item" href="#"> National Team </a></li>
                <li><a class="dropdown-item" href="our-team.html"> UP (AWADH) Team </a></li>
              </ul>
            </li>
            <li class="nav-item position-relative"><a class="nav-link" href="our-team.html"> Our Team </a></li>
            <li class="nav-item position-relative"><a class="nav-link" href="events.html"> Events </a></li>
            <li class="nav-item dropdown">
              <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Membership </a>
              <ul class="dropdown-menu">
                <li class="position-relative"><a class="dropdown-item" href="membership.html"> Join Membership</a></li>
                <li class="position-relative"><a class="dropdown-item" href="our-members.html"> Our Members </a></li>

              </ul>
            </li>
            <li class="nav-item position-relative"><a class="nav-link" href="photo-gallery.html"> Photo Gallery </a></li>
            <li class="nav-item position-relative"><a class="nav-link" href="contact-us.html"> Contact Us </a></li>

          </ul>
        </div> <!-- navbar-collapse.// -->
      </div> <!-- container-fluid.// -->
    </nav>
        `);

    // $('.outer-container .features').append(`

    //   `);

    $('body').append(`
        <!-- The Modal -->
        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-dialog-centered"">
        <div class=" modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">User Login</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
      
            <!-- Modal body -->
            <form action="">
              <div class="modal-body">
                <div class="input-group">
                  <div>
      
                    <label for="email-input" class="mb-2">Email</label>
                    <input type="email" class="form-control" placeholder="Enter email address..." name="email-input" id="email-input">
                  </div>
                  <div>
      
                    <label for="pswrd-input" class="mb-2">Password </label>
                    <input type="password" class="form-control" placeholder="Enter password...." name="pswrd-input" id="pswrd-input">
                  </div>
                </div>
              </div>
      
              <!-- Modal footer -->
              <div class="modal-footer">
                <a href="registration.html">New User ?</a>
                <a href="##">Forget Password</a>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-danger">Submit</button>
              </div>
            </form>
          </div>
        </div>
        `);


    $('.outer-container footer').append(`
      <div class="footer-top position-relative" style="padding-top: 3rem;">
      <h2 class="main-content-header">Become Life Member</h2>
      <div class="supportive-box"></div>
      <form action="">
        <div class="footer-form">
          <input type="email" placeholder="enter your emailaddress....." name="email" id="footer-email-input">
          <button type="submit" class="btn btn-primary">Join Us</button>
        </div>
      </form>
      <!-- Grid container -->
      <div class="container pt-4 my-padd">
        <!--Grid row-->
        <div class="row my-4">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

            <div class="rounded-circle shadow-1-strong d-flex align-items-center mb-2" style="width: 100px;">
              <img class="footer-logo" src="images/vibha bharati logo2.jpg" alt="">
              <img class="g20-logo" src="images/g20-logo.png" alt="">

            </div>

            <p class="">VIBHA is a national movement dedicated to the integrated development of Bharat through the
              intervention of science, engineering and technology.</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/vibhamalwaofficial" target="_blank"><i
                  class="fa-brands fa-facebook footer-icon"></i></a>
              <a href="https://twitter.com/vibhamalwa" target="_blank"><i
                  class="fa-brands fa-twitter footer-icon"></i></a>
              <a href="https://www.linkedin.com/company/vibhamalwa" target="_blank"><i
                  class="fa-brands fa-linkedin footer-icon"></i></a>
              <a href="#"><i class="fa-solid fa-envelope footer-icon"></i></a>
              <a href="#"><i class="fa-brands fa-instagram footer-icon"></i></a>
            </div>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-2 mb-md-0">
            <h5 class="text-uppercase mb-4"><i class="fa-solid fa-link"></i> Useful Links</h5>

            <ul>
              <li class="mb-2 text-left">
                <a href="index.html" class="text-white">Home
                </a>
              </li>
              <li class="mb-2 text-left">
                <a href="#!" class="text-white">Vigayn Bharati
                </a>
              </li>
              <li class="mb-2 text-left">
                <a href="#!" class="text-white">Science India
                </a>
              </li>
              <li class="mb-2 text-left">
                <a href="#!" class="text-white">Vidhyarthi Vigayn Manthan
                </a>
              </li>
              <li class="mb-2 text-left">
                <a href="#!" class="text-white">Indian Int. Science Festival
                </a>
              </li>
              <li class="mb-2 text-left">
                <a href="#!" class="text-white">World Ayurveda Congress</a>
              </li>
            </ul>
          </div>

          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-2 mb-md-0">
            <h5 class="text-uppercase mb-4">Contact Us</h5>

            <ul class="list-unstyled">
              <li>
                <p><i class="fas fa-map-marker-alt pe-2"></i>F3, Prema Apartment, behind hanuman setu, Lucknow, UP, India</p>
              </li>
              <li>
                <p><i class="fas fa-phone pe-2"></i>tel:91-94156 13968 (Shri Manish ji)</p>
              </li>
              <li>
                <p><i class="fas fa-phone pe-2"></i>tel:91-9793825005 (Dr Neeraj Kumar Tiwari)</p>
              </li>
              <li>
                <p><i class="fas fa-envelope pe-2 mb-0"></i><a
            href="mailto:vibhaawadh@gmail.com">vibhaawadh@gmail.com</a></p>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: darkcyan;">
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">vibha-awadh.org</a>
      </div>
      <!-- Copyright -->
    </div>
        `);


  });
}

$('.outer-container .main-content .features').append(`
<h2 class="center-header">Entities & Initiatives</h2>
<div class="mb-3 trigger-element">
    <div class="card align-items-center"><img src="images/membership-img.jpg" class="" alt="...">
        <div class="card-body">
        <h5 class="card-title text-center">Online Membership</h5><button> CLICK </button>
        </div>
    </div>
    <div class="card align-items-center"> <img src="images/SHAKTI.png" class="" alt="...">
        <div class="card-body">
        <h5 class="card-title text-center">Shakti - A national Movement for Women</h5> <a
                href="https://vijnanabharati.org/Shakti.html" target="_blank"><button> CLICK</button></a>
        </div>
      </div>
    <div class="card align-items-center"> <img src="images/SHIKSHASHILPI.png" class="" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">Shikshashilpi</h5> <a
                href="https://vijnanabharati.org/shikshashilpi.html" target="_blank"><button> CLICK</button></a>
        </div>
    </div>
    <div class="card align-items-center"> <img src="images/TECH4SEVA.png" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">TECH4SEVA</h5> <a
                href="https://vijnanabharati.org/Tech4Seva.html" target="_blank"><button> CLICK</button></a>
        </div>
    </div>
</div>
<div class="mb-2 d-flex justify-content-center trigger-element">
    <div class="card align-items-center"> <img src="images/features-im6.png" class="" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">IISF</h5> <a
                href="https://vijnanabharati.org/IISF.html" target="_blank"><button> CLICK</button></a>
        </div>
    </div>
    <div class="card align-items-center"> <img src="images/features-img5.jpg" class="" alt="...">
    <div class="card-body">
            <h5 class="card-title text-center">Vishwa Ved Vigyan</h5> <a
                href="https://vijnanabharati.org/VVVS.html" target="_blank"><button> CLICK</button></a>
        </div>
    </div>
    <div class="card align-items-center"> <img src="images/vibha_vani.jpg" class="" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">Vibha Vani</h5> <a
                href="https://vijnanabharati.org/vibha_vani.html" target="_blank"><button> CLICK</button></a>
        </div>
    </div>
</div>
        `);

