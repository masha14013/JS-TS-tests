import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
	const a = 4;
	if (a > 5) {
		res.send('OK')
	} else {
		res.send('Hello World!!!!%%%%%')
	}
})

app.get('/users', (req, res) => {
	res.send('Hello Users!????')
})

app.post('/users', (req, res) => {
	res.send('One user created!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})