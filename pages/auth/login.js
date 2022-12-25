import { useEffect } from "react"
import { FcGoogle } from "react-icons/fc"
import Head from "next/head"
import { useRouter } from "next/router"

// firebase imports
import { auth } from "../../firebase.config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Login() {
  const route = useRouter()
  const [user] = useAuthState(auth)

  console.log('current user [login.js]: ', user)

  // sign in with google
  const googleProvider = new GoogleAuthProvider()
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      route.push("/") // redirect to home page
    } catch (error) {
      console.log(error)
    }
  }

  // this block of code will run when the component loads
  // this prevents the user from going to the login page if they are already logged in
  // also handles weird behaviors on page refresh
  useEffect(() => {
    if (user) {
      route.push("/")
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
        <h2 className="text-2xl font-medium">
          Join Today
        </h2>
        <div className="py-4">
          <h3 className="py-4">
            Sign in with one of the providers
          </h3>
          <button
            className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle gap-2 p-4"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  )
}
