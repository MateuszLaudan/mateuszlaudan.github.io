const sections = {
    "about-section": "sections/about.html",
    "education-section": "sections/education.html",
    "career-section": "sections/career.html",
    "projects-section": "sections/projects.html",
    "activities-section": "sections/activities.html",
    "skills-section": "sections/skills.html",
    "contact-section": "sections/contact.html",
};

Object.entries(sections).forEach(([id, file]) => {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // Trigger specific logic after sections are loaded
            if (id === "skills-section") {
                loadSkills();
            }
            if (id === "projects-section") {
                loadProjects();
            }
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
});

// Function to dynamically populate skills
function loadSkills() {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) {
        console.error("The #skills-container element was not found!");
        return;
    }

    const skills = [
        { name: "Python", level: 4 },
        { name: "Flask | FastAPI", level: 3},        
        { name: "Flutter", level: 4 },        
        { name: "GCP | Firebase", level: 4 },        
        { name: "REST API", level: 4 },
        { name: 'PyTorch', level: 3 },
        { name: "Docker", level: 2 },
        { name: "SQL", level: 4 },
        { name: "NoSQL", level: 2 },
        { name: "CI/CD (GitHub Actions)", level: 3 },
        { name: "VMs on Linux", level: 3 },
        { name: 'JIRA', level: 4 },
        { name: "JavaScript, Java", level: 2 }        
    ];

    skills.forEach(skill => {
        const col = document.createElement("div");
        col.className = "col-md-6 mb-3";

        // Generate skill squares
        let skillSquares = "";
        for (let i = 1; i <= 5; i++) {
            const filled = i <= skill.level ? "filled" : "empty";
            skillSquares += `<span class="skill-square ${filled}"></span>`;
        }

        const skillCard = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${skill.name}</h5>
                <div class="skill-level">${skillSquares}</div>
            </div>
        </div>
        `;

        col.innerHTML = skillCard;
        skillsContainer.appendChild(col);
    });

    console.log("Skills dynamically added!");
}



