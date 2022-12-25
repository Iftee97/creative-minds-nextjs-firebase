import Link from "next/link"

// firebase imports
import { auth } from '../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Navbar() {
  const [user] = useAuthState(auth)

  console.log('current user [navbar.js]: ', user)

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">
          Creative Minds
        </button>
      </Link>
      <ul className="flex items-center gap-10">
        <li>
          {!user && (
            <Link href="/auth/login">
              <span className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
                Join Now
              </span>
            </Link>
          )}
        </li>
        <li>
          {user && (
            <div className="flex items-center gap-6">
              <Link href="/post">
                <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm">
                  Post
                </button>
              </Link>
              <Link href="/dashboard">
                <img
                  className="w-12 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt=""
                />
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}
