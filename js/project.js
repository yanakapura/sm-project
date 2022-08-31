

    const id = window.localStorage.getItem('ID')
    const currentProject = data.find(item => item.id === id)

    // Edit Title
    document.getElementById("project__title").textContent = currentProject.name

    // Edit slider
    for(image of currentProject.images) {
        const newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide")
        
        newSlide.innerHTML = `<img src="${image}" alt="">`;
        
        const swiperWrapper = document.getElementById("project__swiper-wrapper")
        swiperWrapper.appendChild(newSlide)
    }

    // Edit description
    document.getElementById("project__description").textContent = currentProject.info


