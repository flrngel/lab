# Intend

checking express.js bodyParser to determine if gives the POST empty value as undefine or null

### input

	POST /test
	a=&

### output

	{'a':''}
	

### input

	POST /test
	b=&

### output

	{'b':''}
	undefined

# Result

not null, so use `undefined`
