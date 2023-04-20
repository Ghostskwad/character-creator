import {useNavigate} from "react-router-dom"
function Home({user}){
    // console.log(user)
    
    const navigate = useNavigate()
    const handleRedirectLogin = () => {
        navigate('/login')
    }

    const handleRedirectSignup = () => {
        navigate('/signup')
    }

    const handleRedirectProfile = () => {
        navigate('/characters')
    }
    
    return(
        <div className="welcome_page">
        { !user ? 
        <div>
            <h2>Welcome! This handy app will help you create and keep track of your original Roleplaying Characters.</h2>
            <h4 onClick={handleRedirectSignup}>Sign In to see all your current characters.</h4>
            <h4 onClick={handleRedirectLogin}>Login to create new ones here.</h4>
        </div>
        :
        (<div className="welcome_page">
            <h2>Welcome! This handy app will help you create and keep track of your original Roleplaying Characters.</h2>
            <h4 onClick={handleRedirectProfile}>To view your profile, click here or navigate to the tab in the navbar.</h4>
        </div>)
        }
    </div>
    )
}
export default Home
