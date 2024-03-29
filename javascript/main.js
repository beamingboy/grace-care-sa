$(function () {
  $("#footer-container").load("./assets/footer.html");
  $("#header-navigation").load("./assets/navbar.html");
});


$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("header").addClass("sticky");
  }
  else {
    $("header").removeClass("sticky");
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $(".hidden-ul").addClass("sticky2");
  }
  else {
    $(".hidden-ul").removeClass("sticky2");
  }
});


// Nav-bar

let savedScrollPosition = 0;

function showSidebar() {
  const sidebar = document.querySelector('.side-bar')
  sidebar.style.display = 'flex';

}

function hideSidebar() {
  const sidebar = document.querySelector('.side-bar')
  savedScrollPosition = window.scrollY || window.pageYOffset;
  window.scrollTo(0, savedScrollPosition);
  sidebar.style.display = 'none';

}




// tips

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".exp-section");

  sections.forEach(section => {
    const header = section.querySelector("h3");
    const content = section.querySelector(".exp-content");

    header.addEventListener("click", function () {
      section.classList.toggle("active");
      content.style.display = section.classList.contains("active") ? "block" : "none";
    });
  });
});



// card slider


// script.js

const container = document.querySelector('.card-slider-container');
const cards = Array.from(document.querySelectorAll('.card'));
const dotsContainer = document.querySelector('.dots');

let currentCardIndex = 0;

function updateCards() {
  container.style.transform = `translateX(-${currentCardIndex * 100}%)`;
}

function updateDots() {
  const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentCardIndex);
  });
}

function navigateTo(index) {
  currentCardIndex = index;
  updateCards();
  updateDots();
}

function navigateLeft() {
  if (currentCardIndex === 0) {
    currentCardIndex = cards.length - 1;
  } else {
    currentCardIndex--;
  }
  updateCards();
  updateDots();
}

function navigateRight() {
  if (currentCardIndex === cards.length - 1) {
    currentCardIndex = 0;
  } else {
    currentCardIndex++;
  }
  updateCards();
  updateDots();
}

dotsContainer.innerHTML = cards.map((_, index) => `<div class="dot"></div>`).join('');

const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    navigateTo(index);
  });
});

document.querySelector('.arrow-left').addEventListener('click', navigateLeft);
document.querySelector('.arrow-right').addEventListener('click', navigateRight);




// form

function SendMail() {

  event.preventDefault();
  // Reset error messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("mobile-error").textContent = "";
  document.getElementById("subject-error").textContent = "";
  document.getElementById("type-error").textContent = "";
  document.getElementById("message-error").textContent = "";

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const subject = document.getElementById("subject").value;
  const type = document.getElementById("type-of-eq").value;
  const message = document.getElementById("message").value;

  // Validate Name
  if (name.trim() === "") {
    document.getElementById("name-error").textContent = "Name is required";
    return;
  }

  // Validate Email
  if (email.trim() === "") {
    document.getElementById("email-error").textContent = "Email is required";
    return;
  } else if (!isValidEmail(email)) {
    document.getElementById("email-error").textContent = "Invalid email format";
    return;
  }

   // Validate Mobile
   if (mobile.trim() === "") {
    document.getElementById("mobile-error").textContent = "Mobile is required";
    return;
  } else if (!isValidMobileNumber(email)) {
    document.getElementById("mobile-error").textContent = "Invalid mobile format";
    return;
  }


  

  // Validate Subject
  if (subject.trim() === "") {
    document.getElementById("subject-error").textContent = "Subject is required";
    return;
  }

  // Validate Qualifications
  if (type === "") {
    document.getElementById("type-error").textContent = "Qualifications are required";
    return;
  }

  // Validate Message
  if (message.trim() === "") {
    document.getElementById("message-error").textContent = "Message is required";
    return;
  }

  sendquote();
}


function sendquote() {


  var params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    from_mobile: document.getElementById("mobile").value,
    from_subject: document.getElementById("subject").value,
    type_eq: document.getElementById("type-of-eq").value,
    message: document.getElementById("message").value
  }
  emailjs.send("service_yf4jdyp", "template_3dce7m3", params).then(function (res) {
    alert("Success! Quiry Sent" + res.status)

    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("type-of-eq").value = "";
    document.getElementById("message").value = "";
  })
}





function WorkForm() {


  event.preventDefault();
  // Reset error messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("mobile-error").textContent = "";

  document.getElementById("qualifications-error").textContent = "";
  document.getElementById("other-qualifications-error").textContent = "";
  document.getElementById("ndis-screening-error").textContent = "";
  document.getElementById("orientation-module-error").textContent = "";
  document.getElementById("first-aid-certificate-error").textContent = "";
  document.getElementById("manual-handling-certificate-error").textContent = "";
  document.getElementById("drivers-license-error").textContent = "";
  document.getElementById("second-ndis-screening-error").textContent = "";
  document.getElementById("work-message-error").textContent = "";

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const qualifications = document.getElementById("qualifications").value;
  const otherQualifications = document.getElementById("other-qualifications").value;
  const ndisScreening = document.querySelector('input[name="ndis-screening"]:checked');
  const orientationModule = document.querySelector('input[name="orientation-module"]:checked');
  const firstAidCertificate = document.querySelector('input[name="first-aid-certificate"]:checked');
  const manualHandlingCertificate = document.querySelector('input[name="manual-handling-certificate"]:checked');
  const driversLicense = document.querySelector('input[name="drivers-license"]:checked');
  const secondNdisScreening = document.querySelector('input[name="second-ndis-screening"]:checked');
  const workMessage = document.getElementById("work-message").value;

  // Validate First Name
  if (name.trim() === "") {
    document.getElementById("name-error").textContent = "Name is required";
    return;
  }

  // Validate Email
  if (email.trim() === "") {
    document.getElementById("email-error").textContent = "Email is required";
    return;
  } else if (!isValidEmail(email)) {
    document.getElementById("email-error").textContent = "Invalid email format";
    return;
  }

  // Validate Mobile
  if (mobile.trim() === "") {
    document.getElementById("mobile-error").textContent = "Mobile is required";
    return;
  } else if (!isValidMobileNumber(email)) {
    document.getElementById("mobile-error").textContent = "Invalid mobile format";
    return;
  }

  // Validate Qualifications
  if (qualifications === "") {
    document.getElementById("qualifications-error").textContent = "Qualifications are required";
    return;
  }

  // Validate Other Qualifications if "Other" is selected
  if (qualifications === "other" && otherQualifications.trim() === "") {
    document.getElementById("other-qualifications-error").textContent = "Please specify other qualifications";
    return;
  }

  // Validate NDIS Screening
  if (!ndisScreening) {
    document.getElementById("ndis-screening-error").textContent = "Please select an option for NDIS Worker Screening";
    return;
  }

  // Validate Orientation Module
  if (!orientationModule) {
    document.getElementById("orientation-module-error").textContent = "Please select an option for NDIS workers' orientation module";
    return;
  }

  // Validate First Aid Certificate
  if (!firstAidCertificate) {
    document.getElementById("first-aid-certificate-error").textContent = "Please select an option for First Aid Certificate";
    return;
  }

  // Validate Manual Handling Certificate
  if (!manualHandlingCertificate) {
    document.getElementById("manual-handling-certificate-error").textContent = "Please select an option for Manual Handling Certificate";
    return;
  }

  // Validate Driver's License
  if (!driversLicense) {
    document.getElementById("drivers-license-error").textContent = "Please select an option for Driver's License";
    return;
  }

  // Validate Second NDIS Screening
  if (!secondNdisScreening) {
    document.getElementById("second-ndis-screening-error").textContent = "Please select an option for the second NDIS Worker Screening";
    return;
  }
  // Validate Work Message
  if (workMessage.trim() === "") {
    document.getElementById("work-message-error").textContent = "Tell us about yourself is required";
    return;
  }

  // Store all values in the params variable
  var params = {
    form_name: name,
    email: email,
    from_mobile: mobile,
    qualifications: qualifications,
    other_qualifications: otherQualifications,
    ndis_screening: ndisScreening.value,
    orientation_module: orientationModule.value,
    first_aid_certificate: firstAidCertificate.value,
    manual_handling_certificate: manualHandlingCertificate.value,
    drivers_license: driversLicense.value,
    second_ndis_screening: secondNdisScreening.value,
    work_message: workMessage
  };

  // // Log params to the console
  // console.log(params);


  sendwork(params);
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidMobileNumber(number) {
  // Basic mobile number validation regex
  // This regex accepts numbers in formats like:
  // +1234567890, 1234567890, 123-456-7890, (123) 456-7890, and many more
  const mobileNumberRegex = /^[+]?[(]?\d{1,4}[)]?[-\s./]?\d{1,5}[-\s./]?\d{1,6}$/;
  return mobileNumberRegex.test(number);
}

function clearRadioButtons(radioGroupName) {
  var radioButtons = document.querySelectorAll('input[type="radio"][name="' + radioGroupName + '"]');
  radioButtons.forEach(function (radioButton) {
    radioButton.checked = false;
  });
}

function sendwork(params) {
  
  // console.log(params)
  emailjs.send("service_yf4jdyp", "template_80wqer6", params).then(function (res) {
    alert("Success! Query Sent " + res.status)

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("qualifications").value = "";
        document.getElementById("other-qualifications").value = "";
    
     // Clear radio button selections
        clearRadioButtons("ndis-screening");
        clearRadioButtons("orientation-module");
        clearRadioButtons("first-aid-certificate");
        clearRadioButtons("manual-handling-certificate");
        clearRadioButtons("drivers-license");
        clearRadioButtons("second-ndis-screening");
        document.getElementById("work-message").value = "";
  })

}
