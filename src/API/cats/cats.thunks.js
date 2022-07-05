import { 
    getCatsRequest,
} from "./cats.actions";

export const getCats = () => {
    return (dispatch) => {
        fetch('https://api.thecatapi.com/v1/images/search/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "d6625e8e-47dd-4063-8126-954be8a1187b"

            }
        }).then(res => res.json())
        .then(cats => {
            console.log(cats);
            dispatch(getCatsRequest(cats));
        })
    }
};
