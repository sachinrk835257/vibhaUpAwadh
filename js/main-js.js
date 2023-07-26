console.log("main-js running")

document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

            everyitem.addEventListener('mouseover', function (e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth

    // scroll animation ocuurs when trigger point is reached

    var triggers = document.querySelectorAll(".main-content .features .trigger-element");

    const triggerPoint1 = triggers[0].offsetTop - window.innerHeight;
    const triggerPoint2 = triggers[1].offsetTop - window.innerHeight;


    // Function to handle the animation
    function handleAnimation() {
        if (window.scrollY > triggerPoint1) {
            // element.style.opacity = 1;
            // element.style.transform = "translateX(0px)";
            let child1 = triggers[0].children
            // // console.log(typeof (child))
            let late = 0
            for (let i = 0; i < child1.length; i++) {
                late += 0.2;
                child1[i].style.transitionDelay = late + 's'
                child1[i].style.visibility = 'visible';
                child1[i].style.transform = 'translateY(0vh)'
                child1[i].style.visibility = 'visible';

            }

        }
        if (window.scrollY > triggerPoint2) {
            // element.style.opacity = 1;
            // element.style.transform = "translateX(0px)";
            let child2 = triggers[1].children
            // console.log(typeof (child))
            let late2 = 0
            for (let i = 0; i < child2.length; i++) {
                late2 += 0.2;
                child2[i].style.transitionDelay = late2 + 's'
                child2[i].style.transform = 'translateY(0vh)'
                child2[i].style.visibility = 'visible';

            }

        }
    }
    window.addEventListener("scroll", handleAnimation);
    // Event listener for scroll
});


// let find = document.querySelector('.main-content .features');
// find.innerHTML='<h2>Entities & Initiatives</h2><div class="mb-3 d-flex justify-content-center trigger-element"><div class="card align-items-center"><img src="images/membership-img.jpg" class="" alt="..."><div class="card-body"><h5 class="card-title text-center">Online Membership</h5><button> CLICK </button></div></div> <div class="card align-items-center">    <img src="images/SHAKTI.png" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">Shakti - A national Movement for Women</h5>      <a href="https://vijnanabharati.org/Shakti.html" target="_blank"><button> CLICK</button></a></div></div>  <div class="card align-items-center">    <img src="images/mandala-entity.png" class="" alt="...">   <div class="card-body">      <h5 class="card-title text-center">Mandala</h5>      <button> CLICK </button>    </div>  </div>  <div class="card align-items-center">    <img src="images/TECH4SEVA.png" alt="...">    <div class="card-body">   <h5 class="card-title ext-center">TECH4SEVA</h5>      <button> CLICK</button>    </div> </div></div><div class="mb-2 d-flex justify-content-center trigger-element">  <div class="card align-items-center">    <img src="images/features-im6.png" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">IISF</h5>      <button> CLICK </button>    </div>  </div>  <div class="card align-items-center">    <img src="images/features-img5.jpg" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">Vishwa Ved Vigyan</h5>      <button> CLICK </button>    </div>  </div>  <div class="card align-items-center">    <img src="images/features-im7.png" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">NASYA</h5>      <button> CLICK </button>    </div>  </div></div>'

// $(".outer-container .main-content .features").append('<h2>Entities & Initiatives</h2><div class="mb-3 d-flex justify-content-center trigger-element"><div class="card align-items-center"><img src="images/membership-img.jpg" class="" alt="..."><div class="card-body"><h5 class="card-title text-center">Online Membership</h5><button> CLICK </button></div></div> <div class="card align-items-center">    <img src="images/SHAKTI.png" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">Shakti - A national Movement for Women</h5>      <a href="https://vijnanabharati.org/Shakti.html" target="_blank"><button> CLICK</button></a></div></div>  <div class="card align-items-center">    <img src="images/mandala-entity.png" class="" alt="...">   <div class="card-body">      <h5 class="card-title text-center">Mandala</h5>      <button> CLICK </button>    </div>  </div>  <div class="card align-items-center">    <img src="images/TECH4SEVA.png" alt="...">    <div class="card-body">   <h5 class="card-title ext-center">TECH4SEVA</h5>      <button> CLICK</button>    </div> </div></div><div class="mb-2 d-flex justify-content-center trigger-element">  <div class="card align-items-center">    <img src="images/features-im6.png" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">IISF</h5>      <button> CLICK </button>    </div>  </div>  <div class="card align-items-center">    <img src="images/features-img5.jpg" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">Vishwa Ved Vigyan</h5>      <button> CLICK </button>    </div>  </div>  <div class="card align-items-center">    <img src="images/features-im7.png" class="" alt="...">    <div class="card-body">      <h5 class="card-title text-center">NASYA</h5>      <button> CLICK </button>    </div>  </div></div>')





console.log("in main")
console.log(document.querySelectorAll(".trigger-element"))