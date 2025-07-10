// Smooth Scrolling for Navbar Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animated Welcome Message
document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.querySelector("#home h2");
    welcomeText.style.opacity = 0;
    welcomeText.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        welcomeText.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        welcomeText.style.opacity = 1;
        welcomeText.style.transform = "translateY(0)";
    }, 500);
});

// Contact Form Validation
const contactForm = document.querySelector("#contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = contactForm.querySelector("input[type='text']").value.trim();
        const email = contactForm.querySelector("input[type='email']").value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address!");
        } else {
            alert("Message sent successfully!");
            contactForm.reset();
        }
    });
}

// Signup Form Validation
const signupForm = document.querySelector("#signup form");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = signupForm.querySelector("input[type='text']").value.trim();
        const email = signupForm.querySelector("input[type='email']").value.trim();
        const password = signupForm.querySelector("input[type='password']").value.trim();

        if (name === "" || email === "" || password === "") {
            alert("All fields are required!");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Invalid email format!");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
        } else {
            alert("Signup successful! Welcome to Customo Shopy.");
            signupForm.reset();
        }
    });
}

// Interactive Find Designers Button
const findDesignersBtn = document.querySelector(".find-designers-btn");
if (findDesignersBtn) {
    findDesignersBtn.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease-in-out";
    });

    findDesignersBtn.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
}
