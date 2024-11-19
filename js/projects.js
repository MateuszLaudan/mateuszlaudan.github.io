function loadProjects() {
    const projects = [
        {
            title: "RIO",
            description: `RIO is a <strong>multi-platform application</strong> (Windows, Web, and Android) designed to measure and enhance <strong>employee engagement</strong> within organizations. Built with <strong>Flutter</strong> and <strong>Flask</strong>, it provides tools like a <strong>Manager's Panel</strong>, <strong>interactive charts</strong> for insights, and <strong>user management</strong>. The app also features <strong>multilanguage support</strong>, making it accessible to diverse teams. Its cross-platform availability ensures accessibility and data-driven decision-making for fostering workplace engagement.`,

            image: "assets/RIO_logo.png",
            additionalImages: ["assets/RIO_33.png", "assets/RIO_11.png", "assets/RIO_22.png", "assets/RIO_44.png"]
        }, {
            title: "SmartList",
            description: `SmartList is a <strong>mobile app</strong> built with <strong>Flutter</strong> and powered by a <strong>MongoDB backend</strong>, currently available in <strong>closed testing</strong> on the Play Store. It allows users to <strong>create and manage shopping lists</strong> with <strong>real-time synchronization</strong> across devices. Designed with a <strong>clean and user-friendly interface</strong>, SmartList makes collaborative shopping effortless and efficient. The app is <strong>used weekly</strong> by users to streamline their shopping experience.`,

            image: "assets/smartlist.png",
            additionalImages: ["assets/smartl_1.png", "assets/smartl_2.png", "assets/smartl_3.png"]
        }
        ,

        {
            title: "iWater",
            description: `iWater is a <strong>mobile app</strong> developed in <strong>Flutter</strong>, leveraging <strong>Hive local storage</strong>, designed to help users <strong>track their daily water intake</strong>. Currently available in <strong>closed testing</strong> on the Play Store, it calculates personalized water goals based on your weight, lets you log drink types and amounts, and provides a <strong>7-day history</strong> of your hydration progress. With its offline functionality, iWater ensures seamless tracking anywhere.`,
            image: "assets/iwater.png",
            additionalImages: ["assets/iwat_1.jpg", "assets/iwat_2.jpg", "assets/iwat_3.jpg", "assets/iwat_4.jpg", "assets/iwat_5.jpg"]
        },
        {
            title: "Coffee AR",
            description: `Coffee AR is an <strong>augmented reality app</strong> built in <strong>Unity</strong> and <strong>C#</strong>, utilizing <strong>Google API</strong> for <strong>image recognition</strong>. The app scans coffee shop banners and QR codes to enhance the <strong>customer experience</strong> by providing interactive access to menu details. Coffee AR aims to blend innovation with convenience, delivering a modern approach to engaging customers in coffee shops.`,
            image: "assets/coffee_ar.png",
            additionalImages: ["assets/c_ar_1.jpg", "assets/c_ar_11.jpg", "assets/c_ar_3.png", "assets/c_ar_4.png"]
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
        <div class="card project-card" data-index="${index}" style="cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
            <div class="card-body text-center">
                <div class="image-wrapper mb-3">
                    <img src="${project.image}" alt="${project.title}" class="img-fluid project-image rounded shadow-sm">
                </div>
                <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold;">${project.title}</h5>
                <p class="card-text" style="font-size: 0.9rem; color: #555;">${project.description}</p>
            </div>
        </div>
    `;

        col.innerHTML = card;
        projectsContainer.appendChild(col);

        // Add hover effects dynamically
        const projectCard = col.querySelector('.project-card');
        projectCard.addEventListener('mouseover', () => {
            projectCard.style.transform = 'translateY(-5px)';
            projectCard.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        projectCard.addEventListener('mouseout', () => {
            projectCard.style.transform = 'translateY(0)';
            projectCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
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

