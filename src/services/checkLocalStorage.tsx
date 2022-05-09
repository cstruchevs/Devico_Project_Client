const checkLocalStorage = () => {
    if (localStorage.getItem('user') === null) {
        return false
      } else {
        return true
      }
}

export default checkLocalStorage