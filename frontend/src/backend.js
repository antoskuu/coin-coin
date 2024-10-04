import axios from 'axios';

//USER AND AUTH ROUTES

//SIGNIN
export const signin = user => {
    window.dispatchEvent(new Event('authChange'));

    // API call to sign in a user
    return axios.post("http://localhost:8000/api/signin", JSON.stringify(user), {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        return response.data; // Return response data
    })
    .catch(err => {
        return err.response.data; // Return error response data
    })

}

//SIGNUP
export const signup = user => {
    window.dispatchEvent(new Event('authChange'));

    // API call to sign up a user
    return axios.post("http://localhost:8000/api/signup", JSON.stringify(user),{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response.data);
        return response.data; // Return response data
    })
    .catch(err => {
        return err.response.data; // Return error response data
    })

}

//SETTING THE JWT TOKEN IN USER'S BROWSER
export const authenticate = (data, next) => {
    // Storing JWT token in user's browser
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}

//SIGNOUT -> REMOVING JWT TOKEN
export const signout = (next) => {
    window.dispatchEvent(new Event('authChange'));

    // Removing JWT token upon signout
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");

        axios.get("http://localhost:8000/api/signout")
        .then(response => {
            console.log(response.data); 
            next(); 
        })
        .catch(err => console.log(err));
    }

};

//VALIDATION IF USER IS SIGNED IN
export const isAuthenticated = () => {
    // Checking if the user is authenticated
    if (typeof window === "undefined") {
        return false
    }
    if(localStorage.getItem("jwt"))
        return JSON.parse(localStorage.getItem("jwt"));
    else
        return false
}


// Fonction de connexion
export const login = (user) => {
    // Logique de connexion
    localStorage.setItem("jwt", JSON.stringify(user));
    // Émettre l'événement authChange
    window.dispatchEvent(new Event('authChange'));
};

// Fonction de déconnexion
export const logout = () => {
    // Logique de déconnexion
    localStorage.removeItem("jwt");
    // Émettre l'événement authChange
    window.dispatchEvent(new Event('authChange'));
};