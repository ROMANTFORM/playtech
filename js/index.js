const refs = {
    categoryFoodBtn: document.querySelector('.btn-food'),
    categoryPetsBtn: document.querySelector('.btn-pets'),
    categoryPlantsBtn: document.querySelector('.btn-plants'),

    categoryPets: document.querySelector('.pets'),
    categoryFoods: document.querySelector('.food'),
    categoryPlants: document.querySelector('.plants'),

    infoBtn: document.querySelector('.categories-card__btn'),
    hiddenText: document.querySelector('.hidden-wrap'),

    containerCategories: document.querySelector('.wrapper-categories')
};
// refs.infoBtn.addEventListener('click', () => {
//     console.log('click')
// })

 const fetchData = (id, el) => {
  const data = fetch(`https://run.mocky.io/v3/${id}`)
        .then(res => {
            return res.json()
        })
      .then(data => {
        //   console.log(data)
          data.map(({ image, title, description }) => {
              
              el.insertAdjacentHTML('beforeend', `
            <div class="categories-card">
                <img src=${image} alt=${title}  class="categories-img">
                <button class="categories-card__btn" >&#8595</button>
                <div class="hidden-wrap">
                    <p class="categories-card__text">${description}</p>
                    <button id="1" class="hidden-wrap__btn">Go for it!</button>
                </div>
                <h3 class="categories-card__title">${title}</h3>      
            </div>`)
          });
      });
};


refs.categoryPets.addEventListener('click', (evt) => {
    // console.log(evt.currentTarget)
    fetchData(evt.currentTarget.id, evt.currentTarget);
});

refs.categoryFoods.addEventListener('click', (evt) => {
fetchData(evt.currentTarget.id, evt.currentTarget);
});

refs.categoryPlants.addEventListener('click', (evt) => {
    fetchData(evt.currentTarget.id, evt.currentTarget);
});

refs.containerCategories.addEventListener('click', (evt) => {
    // console.log(evt.currentTarget)
    // console.log(evt.target.classList.contains('categories-card__btn'))
});





