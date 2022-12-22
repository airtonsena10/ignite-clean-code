// Nomenclatura de variáveis

const listOfUsersCategory = [
  {
    CatergoryTitle: 'User',
    minimumFollowers: 5
  },
  {
    CategoryTitle: 'Friendly',
    minimumFollowers: 50,
  },
  {
    CategpryTitle: 'Famous',
    minimumFollowers: 500,
  },
  {
    Categorytitle: 'Super Star',
    minimumFollowers: 1000,
  },
]

export default async function GetUserByCategory (req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubProfileResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubProfileResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubProfileData = await githubProfileResponse.json()

  const sortedListOfUsercategory = listOfUsersCategory.sort(
  (a, b) =>  b.minimumFollowers - a.minimumFollowers); 

  const userCategoryNotfound = sortedListOfUsercategory .find(
  (userCategory) => githubProfileData.followers > userCategory.minimumFollowers)

  const result = {
    githubUsername,
    userCatergory: userCategoryNotfound?.CatergoryTitle
  }

  return result
}

GetUserByCategory({ query: {
  username: 'josepholiveira'
}}, {})