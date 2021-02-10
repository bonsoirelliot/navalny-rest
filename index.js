addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */


async function handleRequest(request) {
  const url = new URL(request.url)
  try{
    let quotes = JSON.parse(
			await(await fetch('https://raw.githubusercontent.com/bonsoirelliot/navalny-rest/quotes/quotes1.json')).text()
		)
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return new Response(JSON.stringify(randomQuote), {status: 200})
  }catch(error){
    print(error)
  }
}
