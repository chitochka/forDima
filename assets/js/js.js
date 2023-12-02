window.onload = function () {
    let ls = localStorage
    let arrData  = JSON.parse(ls.getItem(HABIT_KEY))

    const app = {
        nav: document.querySelector('.aside-menu'),
        contentName : document.querySelector('#content-name'),
        progressBar : document.querySelector('.progress-bar-wrapper'),
        progressPercent : document.querySelector('.progress-percent'),
    }

    const renderMenu =()=>{
        let arrItems =  arrData.map((item, index)=>{ return `<button class="aside-menu-item ${index?"":"active"}" data-id="${index+1}" menu-item-id="${index+1}"></button>`})
        app.nav.innerHTML = arrItems.join(" ")
        app.nav.onclick = (e) =>{
            let element = e.target
            if (element.tagName.toLowerCase() !=="button") return
            const navItems = app.nav.children
             for (let i=0; i<navItems.length;i++){
                navItems[i] === element
                    ? navItems[i].classList.add('active')
                    :navItems[i].classList.remove('active')
             }
            renderContent(element.dataset.id)
        }
    }


   const renderContent = (id) => {
       let dataObj = arrData.find( item => item.id == id)
       app.contentName.innerText = dataObj.name
       const percent = dataObj.days.length*10
       app.progressBar.style.cssText = `width: ${percent}%`
       app.progressPercent.innerText = percent + "%"   
    }


    renderMenu()
}



// TODO : сделать значение progressBar при первой отрисовке
// TODO : последняя кнопка в меню ADD