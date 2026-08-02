import axios from "axios";

export function searchPhoto(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "56969779-79703cf16e75705543728b96e",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
        }
    }).then(photos => {
        if (!photos.data.hits.length) {
            const error = new Error();
            error.code = 'NO_IMAGES';
            throw error;
        } else {
            return photos.data.hits;
        }
    });
};

