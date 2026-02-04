export default function Greeting({isLoggedIn}){
    return <h1>{isLoggedIn ? "Welcome Back!" : "Please sign in."}</h1>;
}