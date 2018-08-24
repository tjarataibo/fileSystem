const fs = require('fs');
console.log('hola')
fs.readFile('text.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data)
})
console.log('chai')

/* 
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// const txt = fs.readFileSync('text.txt', 'utf-8');
// console.log(txt)
/*



// Renombrar archivo txt

// fs.rename('text.txt', 'newFile.txt', (err) => {
//   if (err) throw err;
// })

// AGREGAR TEXTO

fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
*/

// fs.appendFile('text.txt', '\n Autor Desconocido', (error) => {
//   if (error) throw error;
// })


// BORRAR ARCHIVO

// fs.unlink('text2.txt', (error) => {
//   if (error) throw error;
// })

// LEER CONTENIDO DE UN DIRECTORIO

// fs.readdir('./../src', (error, files) => { //iteracion
//   files.forEach(file => {
//     console.log(file)
//   })
// })