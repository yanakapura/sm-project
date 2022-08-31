const tabsTitles = document.querySelectorAll('.tabs-title__tab')
const tabs = document.querySelectorAll(".tabs__tab")
const tabsContainers = document.querySelectorAll(".tabs__container")
const sProjuctsHeaderItems = document.querySelectorAll(".section-projects__header-item")

document.querySelector(".section-services__subheader").addEventListener("click", (e) => {
    if (e.target.classList.contains("tabs-title__tab")) {
        for (tabTitle of tabsTitles) {
            tabTitle.classList.remove("active")
        }
        e.target.classList.add("active")
        // document.querySelector("#underline").style.width = `${e.target.clientWidth}px` 
        for (tab of tabs) {
            tab.style.display = "none"
            if (e.target.dataset.tab === tab.dataset.tab) {
                tab.style.display = "block"
            }

        }
    } 
})

document.querySelector(".section-projects__header-list").addEventListener("click", (e)=>{
    console.log(e.target);
    if (e.target.classList.contains("section-projects__header-item")) {
        for (item of sProjuctsHeaderItems) {
            item.classList.remove("active")
            document.querySelector("#underline-adaptive").style.width = `${e.target.clientWidth}px`
        }
        e.target.classList.add("active")
    }
})

document.querySelector(".tabs").addEventListener("click", (e)=> {
    if (e.target.classList.contains("tabs__header")) {
        slideContainerUp(e.target)
    } else if (e.target.parentElement.classList.contains("tabs__header")) {
        slideContainerUp(e.target.parentElement)
    }
})

function slideContainerUp (target) {
    for (tabsContainer of tabsContainers) { 
        if (target.dataset.tab_wrapper === tabsContainer.dataset.tab_wrapper) {
            console.log(target.lastChild);
            tabsContainer.classList.toggle("active")
            target.lastChild.classList.toggle("active")
        }
    }
}

// SMOOTH SCROLL
document.querySelector(".header").addEventListener('click', (e)=>{
    let link = e.target.href;
    if(link.includes("#")) {
        e.preventDefault()
        link = link.substring(link.indexOf('#'), link.length);
        const ancor = document.querySelector(link);
        handleButtonClick(ancor)
    }
})


function handleButtonClick(ancor) {
    ancor.scrollIntoView({block: "center", behavior: "smooth"});
}
