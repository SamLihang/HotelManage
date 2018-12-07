export function setUser(token) {
  localStorage.setItem('token', token)
}

export function getUser() {
  return `Bearer ${localStorage.getItem('token') || ""}`
}

export function removeUser() {
  localStorage.removeItem('token')
}