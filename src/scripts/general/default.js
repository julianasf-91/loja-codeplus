const menu = require('../modules/menu')

const Default = {
    init: function () {
       Default.menuInit() 
    },

    menuInit: () => {
        const menuConfig = {
            mainClass: '.header__categorias',
            tree: 3    
        }

        menu.init(menuConfig)
    }
}

module.exports = Default