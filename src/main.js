import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchPhoto } from "./js/pixabay-api";
import { galleryRender } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";

const searchForm = document.querySelector("form");
const searchInput = document.querySelector('input');


searchForm.addEventListener("submit", event => {
    event.preventDefault();
    clearGallery();
    showLoader();
    const inputValue = searchInput.value.trim();
    if (inputValue === '') {
        iziToast.error({
            message: "Field can't be empty."
        });
    }
    else {
        searchPhoto(inputValue)
            .then((hits) => {
                galleryRender(hits);
            })
            .catch(() => {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!"
                });
            });
    }
    hideLoader();
});


