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


    var area = document.querySelector('.register');
    var numbering = document.querySelectorAll('.progress .numbering');
    var progressBar = this.documentElement.querySelectorAll('.progress .progress-bar')
    var count = 1

    area.addEventListener('click', function (e) {
        if (e.target.classList.contains('nextBtn')) {
            
            numbering[count].classList.add('next-numbering');
            progressBar[count].classList.add('next-progress-bar')
            
            e.target.parentElement.parentElement.style.display = 'none';
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
            count+=1


        } if (e.target.classList.contains('prevBtn')) {
            count-=1
            progressBar[count].classList.remove('next-progress-bar')
            numbering[count].classList.remove('next-numbering');
            e.target.parentElement.parentElement.style.display = 'none';
            e.target.parentElement.parentElement.previousElementSibling.style.display = 'block';
        }
    })

});


const citiesByState = {
    andhra_pradesh: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur"],
    maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    tamil_nadu: ["Chennai", "Coimbatore", "Madurai", "Salem"],
    // Add more states and their cities here
};


function handlePrevBtn(prvSection) {
    console.log("in function ...", prvSection);
    prvSection.style.display = 'block'
    console.log("out function ...", prvSection);


}
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


var passwordInput = document.querySelector('form #password');
var cnfrmPasswordInput = document.querySelector('form #cnrfpassword');
var passwordRulesElement = document.querySelector('form #passwordRules');
var cnfrmPasswordInputTextContent = document.querySelector('form #cnfrmPasswordInputTextContent')
// console.log("####",passwordInput,passwordRulesElement)

passwordInput.addEventListener('input', checkPasswordRules);

function checkPasswordRules() {
  const password = passwordInput.value;
  const rules = [];

  // Check minimum length
  if (password.length < 8) {
    rules.push('Minimum length: 8 characters');
  }

  // Check complexity
  if (!/[A-Z]/.test(password)) {
    rules.push('Include at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    rules.push('Include at least one lowercase letter');
  }
  if (!/\d/.test(password)) {
    rules.push('Include at least one number');
  }
  if (!/[\W_]/.test(password)) {
    rules.push('Include at least one special character');
  }

  // Check common passwords
  const commonPasswords = ['password', '123456', 'qwerty', 'abc123']; // Add more if needed
  if (commonPasswords.includes(password.toLowerCase())) {
    rules.push('Choose a stronger password');
  }

  // Check username in password
  const username = 'exampleUser'; // Replace with the actual username or fetch from the server
  if (password.toLowerCase().includes(username.toLowerCase())) {
    rules.push('Avoid using your username in the password');
  }

  // Check for dictionary words or easily guessable information
  const dictionaryWords = ['example', 'password', 'user']; // Add more if needed
  if (dictionaryWords.some(word => password.toLowerCase().includes(word))) {
    rules.push('Avoid using dictionary words or easily guessable information');
  }

  // Display password rules
  if (rules.length === 0) {
    passwordRulesElement.textContent = 'Password is strong!';
  } else {
    passwordRulesElement.textContent = rules.join('\n');
  }
}

cnfrmPasswordInput.addEventListener('keyup',()=>{
    
    if ((passwordInput.value) != (cnfrmPasswordInput.value)) {
        console.log("dfgd",passwordInput.value,cnfrmPasswordInput.value)
        cnfrmPasswordInputTextContent.textContent = "password does not match";
        
    }
    else{
        console.log("ffjj",passwordInput.value,cnfrmPasswordInput.value)
        cnfrmPasswordInputTextContent.textContent = "";
    }
    
    

})


 

