// Async way to access and write to files

const { readFile, writeFile } = require("fs")

readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return null
  }

  const first = result
  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return null
    }

    const second = result
    writeFile(
      "./Content/result-async.txt",
      `here are the files: ${first} ${second}`,
      (err) => {
        if (err) {
          console.log(err)
        }
      }
    )
  })
})
