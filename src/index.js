import recipes from './js/menu.json';
import { refs } from './js/refs';
import { renderRecipesMarkup } from './js/render-functions';
// console.log(recipes);
renderRecipesMarkup(recipes);

const onCardButtonClick = e => {};

refs.recipesList.addEventListener('click', onCardButtonClick);

const setSameHeight = () => {
    const elements = {
        img: refs.recipesList.querySelectorAll('img'),
        cardTitle: refs.recipesList.querySelectorAll('.card__title'),
    };
    console.log(elements);
    for (key in elements) {
        console.log(key[0]);
    }
    elements.map(element => {
        let heightArray = [];
        element.forEach(e => heightArray.push(e.clientHeight));
        const maxHeight = Math.max(...heightArray);
        return element.forEach(e => (e.style.height = `${maxHeight}px`));
    });
};

setSameHeight();
