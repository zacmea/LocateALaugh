import {useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function Auth(props){

    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleLogin = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            // props.setUser(data.user)
            localStorage.setItem('token', data.token)
            localStorage.setItem('id', data.user._id)
            localStorage.setItem('name', data.user.username)
            navigate('/home')
        } catch (error) {
            console.error(error)
        }
    }
console.log(localStorage.getItem("name"))
    const handleSignUp = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            // props.setUser(data.newUser)
            localStorage.setItem('token', data.token)
            localStorage.setItem('id', data.user?._id)
            localStorage.setItem('name', data.user?.username)
            navigate('/home')
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
    
                <div className='flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500'>
                 <div className="container mx-auto px-4 max-w-lg bg-black shadow-lg rounded-lg p-6">
                <section>
                <h2 className="text-4xl text-center font-bold my-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-2 px-4 rounded">
                {showLogin ? "Login" : "Sign Up"}
              </h2>
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="text-white-500 hover:text-blue-700 mb-4"
              >
                {showLogin ? "Switch to Sign Up" : "Switch to Login"} 
              </button>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  showLogin ? handleLogin() : handleSignUp();  
                }}
                className="flex flex-col items-center space-y-3"
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="shadow border rounded py-2 px-4 text-gray-700 w-full"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="shadow border rounded py-2 px-4 text-gray-700 w-full"
                />
                <button
                  type="submit"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                  {showLogin ? "Log Me In" : "Create New Account"}
                </button>
              </form>

             </section>   
             </div>
             </div>

    )
}
