const users = [
  {
    email: 'rizwan@mail.com',
    fullName: 'rizwan',
    gender: 'male',
    id: '1643440954134',
    password: '675786567b',
    terms: true,
  },
]

export const getUsers = async () => {
  const res = await fetch('/users')
  const data = await res.json()
  return data
}

export const getUser = async (id) => {
  const res = await fetch('/users')
  const data = await res.json()
  const user = await data.find((user) => user.id === id)
  return user
}

export const createUser = async (payload) => {
  try {
    const responce = await fetch(`/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await responce.json()
    return data
  } catch (error) {
    console.error('Error: ', error)
  }
}
