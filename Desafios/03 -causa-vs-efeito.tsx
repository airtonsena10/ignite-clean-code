// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [isGettingUserData, setIsGettingUserData] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      setIsGettingUserData(true)

      const fetchUserResponse = fetchUser()

      setUserData(fetchUserResponse.data.user)
      
      isGettingUserData(false)
    }

    loadUser()
  })

  if (isGettingUserData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}
