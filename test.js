const getAllResolutions = async () => {
  let result = []
  for (let i = 1; i <= 1024; i++) {
    const url = `https://static.pocketcasts.com/discover/images/${i}/ca8b61c0-c13d-012e-6620-00163e1b201c.jpg`
    const res = await fetch(url)
    if (res.status !== 200) {
      console.log(i + ' failed')
    } else {
      console.log(i + ' success')
      result.push(i)
    }
  }

  return result
}

getAllResolutions()
