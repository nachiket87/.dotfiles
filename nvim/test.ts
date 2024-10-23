console.log("hello")

const x = (a: string) => {
	return (salutation: string) => {
		console.log(`${salutation} ${a}`)
	}
}

const z = x("world")

z("hello")
z("hi")
