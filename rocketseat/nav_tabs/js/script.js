const $ = document.querySelector.bind(document)


function tabNavigation () {
    const html = {
        buttons: [...$('.tab-buttons').children],
        contents: [...$('.tab-contents').children],
        defaultTab: $('[data-default]')
    }

    //Oculta os tabs de conteúdo
    function hideAllTabContents () {
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }

    //Remove todas as classes ativas 
    function removeAllActiveClass () {
        html.buttons.forEach(tab => {
            tab.className = tab.className.replace(" active", "")
        })
    }

    //Exibe o conteúdo da tab atual
    function showCurrentTab (id) {
        const tabContent = $('#' + id)
        tabContent.style.display = "block"
    }

    function selectTab (event) {
        hideAllTabContents()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)

        
        target.className += " active"
        
    }

    //Fica ouvindo as mudanças
    function listenForChange () {
        html.buttons.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }

    //Inicia tudo
    function init () {
        hideAllTabContents()
        listenForChange()

        html.defaultTab.click()
    }

    return {
        init
    }
}

//Quando a página toda carregar, inicia uma função
window.addEventListener('load', () => {
    const TabNavigation = tabNavigation()
    TabNavigation.init()
})