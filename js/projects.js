function loadProjects() {
    const projects = [
        {
            title: "RIO",
            description: "Description of Project 3.",
            image: "assets/RIO_logo.png",
            additionalImages: ["assets/RIO_33.png", "assets/RIO_22.png", "assets/RIO_11.png", "assets/RIO_44.png"]
        },
        {
            title: "SmartList",
            description: "Description of Project 1.",
            image: "assets/smartlist.png",
            additionalImages: ["assets/SmartList_1.png", "assets/SmartList_2.png"]
        },
        {
            title: "iWater",
            description: "Description of Project 2.",
            image: "assets/iwater.png",
            additionalImages: ["assets/iWater_1.png", "assets/iWater_2.png"]
        },
        {
            title: "Coffee AR",
            description: "Description of Project 4.",
            image: "assets/coffee_ar.png",
            additionalImages: ["assets/CoffeeAR_1.png", "assets/CoffeeAR_2.png"]
        }
    ];

    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) {
        console.error("The #projects-container element was not found!");
        return;
    }

    projects.forEach((project, index) => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 mb-4";

        const card = `
            <div class="card project-card" data-index="${index}" style="cursor: pointer;">
                <div class="card-body text-center">
                    <img src="${project.image}" alt="${project.title}" class="img-fluid mb-3 project-image">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;

        col.innerHTML = card;
        projectsContainer.appendChild(col);
    });

    // Add click event listener to project cards
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            showProjectModal(projects[index]);
        });
    });
}

// Function to populate and show the modal
function showProjectModal(project) {
    const modalLabel = document.getElementById("projectModalLabel");
    const carouselInner = document.getElementById("carousel-inner");

    // Set modal title
    modalLabel.textContent = project.title;

    // Populate carousel with additional images
    carouselInner.innerHTML = ""; // Clear previous slides
    project.additionalImages.forEach((image, index) => {
        const isActive = index === 0 ? "active" : ""; // Set the first slide as active
        const slide = `
            <div class="carousel-item ${isActive}">
                <img src="${image}" alt="${project.title}" class="d-block w-100">
            </div>
        `;
        carouselInner.innerHTML += slide;
    });

    // Show the modal
    const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));
    projectModal.show();
}

