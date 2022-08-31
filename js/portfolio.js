const porfolioList = document.getElementById("portfolio");

for (item of data) {
    const newPorfolioElement = document.createElement("div");
    newPorfolioElement.innerHTML = `<li class='project-cart' id=${item.id}><a href='../pages/project.html'><div class='project-cart__img'><img src=${item.images[0]} alt='project image'></div><div class='project-cart__label'><h3>${item.name}</h3></div></a></li>`;
    
    porfolioList.appendChild(newPorfolioElement)
}

porfolioList.addEventListener('click', (e) => {
    const id = e.target.parentElement.parentElement.id || e.target.parentElement.parentElement.parentElement.id
    window.localStorage.setItem('ID', id)
})