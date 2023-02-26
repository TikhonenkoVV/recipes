import { refs } from './refs.js';

const createMarkupRecipes = recipes => {
    return recipes
        .map(
            ({ id, name, description, image, price, ingredients }) =>
                `<li id="${id}" class="recipes-list__item">
        <article class="card">
          <img src="${image}" alt="${name}" />
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <p class="card__price">Ціна за порцію: ${price} грн.</p>
            <p class="card__description">${description}</p>
          </div>
          <ul class="tag-list">
            ${ingredients
                .map(
                    ingredient =>
                        `<li class="tag-list__item">${ingredient}</li>`
                )
                .join('')}
          </ul>
          <button class="card__button" type="button">Додати в замовлення</button>
        </article>
      </li>`
        )
        .join('');
};

export const renderRecipesMarkup = recepies => {
    refs.recipesList.insertAdjacentHTML(
        'beforeend',
        createMarkupRecipes(recepies)
    );
};
