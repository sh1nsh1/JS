const express = require('express')
const app = express()
const path = require('path')
// app.use(express.static(path.join(__dirname, 'P1')))


app.get('/p1/', (request, result) => {
    result.sendFile(`${__dirname}/P1/i.html`);
})
app.get('/p2/', (request, result) => {
    result.sendFile(`${__dirname}/P2/i.html`);
})
app.get('/p3/', (request, result) => {
    result.sendFile(`${__dirname}/P3/i.html`);
})
app.get('/p4/', (request, result) => {
    result.sendFile(`${__dirname}/P4/i.html`);
})
app.get('/p5/', (request, result) => {
    result.sendFile(`${__dirname}/P5/i.html`);
})
app.get('/p6/', (request, result) => {
    result.sendFile(`${__dirname}/P6/i.html`);
})
app.get('/l1/', (request, result) => {
    result.sendFile(`${__dirname}/L1/i.html`);
})
app.get('/l2/', (request, result) => {
    result.sendFile(`${__dirname}/L2/i.html`);
})
app.get('/', (request, result) => {
    result.sendFile(`${__dirname}/P1/i.html`);
})
app.listen(3333, () => {
    console.log('Application listening on port 3333!')
});