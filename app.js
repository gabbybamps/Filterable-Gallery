const buttons = document.querySelectorAll(`.btn`);
const imgs = document.querySelectorAll(`.store-item`);

const filterGallery = function () {
  buttons.forEach((button) => {
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      imgs.forEach((item) => {
        if (filter === `all`) {
          item.style.display = `block`;
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = `block`;
          } else {
            item.style.display = `none`;
          }
        }
      });
    });
  });
};

filterGallery();
