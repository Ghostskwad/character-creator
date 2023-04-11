import {useNavigate} from "react-router-dom"
function Home(){
    
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('/login')
    }
    
    return(
        <div>
            <h2>This handy app will help you create and keep track of your original Roleplaying Characters.</h2>
            <h4>Sign In to see all your current characters.</h4>
            <h4 onClick={handleRedirect}>Login to create new ones here.</h4>
        </div>
    )
}
export default Home
