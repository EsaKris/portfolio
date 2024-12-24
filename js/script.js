document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Scroll animations
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach((section) => observer.observe(section));
});
   // Define the list of skills to cycle through
const skills = ["Web Designer", "UI/UX Designer",  "Social Media Strategist"];
let currentSkillIndex = 0;

function changeSkill() {
    const skillElement = document.getElementById('changing-skills'); // Get the element with changing text
    skillElement.textContent = `A ${skills[currentSkillIndex]}`; // Update the text

    // Move to the next skill in the array
    currentSkillIndex = (currentSkillIndex + 1) % skills.length; // Cycle through the skills

    // Set a timeout to change the skill every 3 seconds (3000 ms)
    setTimeout(changeSkill, 3000);
}

// Start the skill changing when the page loads
window.onload = function() {
    changeSkill();
};


function sendToWhatsApp(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Debugging: Check if values are captured correctly
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Ensure all fields have values
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Format the message to send to WhatsApp
    var messageText = `*New Contact Message*\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // WhatsApp link format (replace '2349155775787' with your actual WhatsApp number)
    var whatsappLink = `https://wa.me/2349155775787?text=${encodeURIComponent(messageText)}`;

    // Debugging: Check the WhatsApp link before redirecting
    console.log("WhatsApp Link: " + whatsappLink);

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
}

