import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

// firebase imports
import { auth } from "../firebase.config"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Dashboard() {
  const route = useRouter()
  const [user] = useAuthState(auth)

  const handleSignOut = async () => {
    try {
      // await auth.signOut() // sign out using the auth object's signOut method 
      await signOut(auth) // sign out using firebase auth's signOut function
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user) {
      route.push("/auth/login")
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div>
        <h1>Your Posts</h1>
        <div>
          All Posts
        </div>
        <button
          className=""
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </>
  )
}
