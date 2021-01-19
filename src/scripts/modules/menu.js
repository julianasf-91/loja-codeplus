const api = require('./api')

const menu = {
    init: ({tree, mainClass}) => {
        const config = {
            method: 'GET',
            url: `/api/catalog_system/pub/category/tree/${tree}`
        }
        document.querySelector('.header__categorias').innerHTML = ''

        const callbackMenu = data => {

            menu.render({data, mainClass});

        }

        api(config, callbackMenu) 
    },

    render: ({data, mainClass}) => {
        const $mainClass = document.querySelector(mainClass);
        const mainClassWithoutPoint = mainClass.replace('.', '')

        data.forEach(category => {
            const { name, url } = category;

            const newCategory = document.createElement('div');
            newCategory.classList.add(`${mainClassWithoutPoint}-item`);

            const newCategoryLink = document.createElement('a');
            newCategory.href = url;
            newCategory.textContent = name;

            newCategory.appendChild(newCategoryLink);
            $mainClass.appendChild(newCategory);
        })
    }
}

module.exports = menu