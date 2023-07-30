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


const citiesByState = {
    andhra_pradesh: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur"],
    maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    tamil_nadu: ["Chennai", "Coimbatore", "Madurai", "Salem"],
    // Add more states and their cities here
  };
  
  function populateCities() {
    const stateSelect = document.getElementById("stateSelect");
    const citySelect = document.getElementById("citySelect");
    const selectedState = stateSelect.value;
    const cities = citiesByState[selectedState] || [];
  
    // Clear existing city options
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
  
    // Add city options for the selected state
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
  
  // Trigger initial population of cities when the page loads
  populateCities();
  
