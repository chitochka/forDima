window.onload = function () {
    

    let ls = localStorage
    let arrData  = JSON.parse(ls.getItem(HABIT_KEY))

    const app = {
        nav: document.querySelector('.aside-menu'),
        contentName : document.querySelector('#content-name'),
        progressBar : document.querySelector('.progress-bar-wrapper'),
        progressPercent : document.querySelector('.progress-percent'),
        records : document.querySelector('ul.records'),
    }

    const renderMenu =()=>{
        let arrHTML =  arrData.map((item, index)=>{ return `<button class="aside-menu-item ${index?"":"active"}" data-id="${index+1}" menu-item-id="${index+1}"></button>`})
        app.nav.innerHTML = arrHTML.join(" ")
        app.nav.onclick = (e) =>{
            let element = e.target
            if (element.tagName.toLowerCase() !=="button") return
            const navItems = app.nav.children
             for (let i=0; i<navItems.length;i++){
                navItems[i] === element
                    ? navItems[i].classList.add('active')
                    : navItems[i].classList.remove('active')
             }
            renderContent(element.dataset.id)
        }
    }


   const renderContent = (id) => {
       let dataObj = arrData.find( item => item.id == id)
       const percent = dataObj.days.length*10
       app.contentName.innerText = dataObj.name
       app.progressBar.style.cssText = `width: ${percent}%`
       app.progressPercent.innerText = percent + "%"   
       renderRecordsList(dataObj.days)
    }
    
    const renderRecordsList =(days)=>{
        let arrHTML =  days.map((day, index)=>{ 
            return `
            <li class="record">
              <span class="record-day">Den ${index+1}.</span>
              <span class="record-text">${day.comment}</span>
              <button class="record-remove"></button>
            </li>`
        })
        if (days.length < 10 ) arrHTML.push(inputTemplate(days.length +1))
        app.records.innerHTML = arrHTML.join(" ")
    }

    const inputTemplate = (dayNumber) => { 
        return `
         <li class="record">
            <span class="record-day">Den ${dayNumber}.</span>
            <form class="record-add">
                <input class="input-icon" type="text" placeholder="Komentář" />
                <button>Přidat</button>
            </form>
        </li>
    `}


    renderMenu()
}



// TODO : сделать значение progressBar при первой отрисовке
// TODO : последняя кнопка в меню ADD