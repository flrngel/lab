new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("third")
  }, 1000)
  console.log("first")
  resolve()
}).then(() => {
  console.log("second")
})
