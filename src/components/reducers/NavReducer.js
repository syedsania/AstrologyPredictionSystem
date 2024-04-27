const initState = "Home"
export default function NavReducer(state=initState, action){
    switch(action.type) {
        case "Home":
            return "Home";
        case "Login":
            return "Login";
        case "Registration":
            return "Registration"; 
        case "Astrology":
            return "Astrology";
        case "Profile":
            return "Profile";
        default:
            return "Astrology";
    }
}