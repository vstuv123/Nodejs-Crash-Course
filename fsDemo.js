//import fs from 'fs';
import fs from 'fs/promises'

// readFile() -- callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//  readFile() -- Synchronous version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// readFile() - Promise (using .then())
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .then((err) => console.log(err))

// readFile() - async/await
const readfile = async () => {
    try {
        const data = await fs.readFile("./test.txt", "utf8")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//writeFile() - async/await

const writeFile = async () => {
    try {
        await fs.writeFile("./test.txt", "Hello man pak is good or ind");
        console.log('File written to ... ');
    } catch (error) {
        console.log(error);
    }
}

//append() async await
const appendFile = async (req, res) => {
    try {
        await fs.appendFile("./test.txt", "\nMan is from Pakistan")
        console.log('File Appended');
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendFile();
readfile();