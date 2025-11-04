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
app.get('/p7/', (request, result) => {
    result.sendFile(`${__dirname}/P7/i.html`);
})
app.get('/p8/', (request, result) => {
    result.sendFile(`${__dirname}/P8/i.html`);
})
app.get('/p10/', (request, result) => {
    result.sendFile(`${__dirname}/P10/i.html`);
})
app.get('/p11/', (request, result) => {
    result.sendFile(`${__dirname}/P11/i.html`);
})
app.get('/p12/', (request, result) => {
    result.sendFile(`${__dirname}/P12/i.html`);
})
app.get('/p13/', (request, result) => {
    result.sendFile(`${__dirname}/P13/i.html`);
})
app.get('/p14/', (request, result) => {
    result.sendFile(`${__dirname}/P14/i.html`);
})
app.get('/p15/', (request, result) => {
    result.sendFile(`${__dirname}/P15/i.html`);
})
app.get('/p16/', (request, result) => {
    result.sendFile(`${__dirname}/P16/i.html`);
})
app.get('/p17/', (request, result) => {
    result.sendFile(`${__dirname}/P117/i.html`);
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