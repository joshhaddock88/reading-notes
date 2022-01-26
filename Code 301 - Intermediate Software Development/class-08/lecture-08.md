Frontend uses axios to get information form the server.

The server uses axios to get information from other servers.

Nothing in the frontend can stay secret from the users.

The server is a different computer from the users computer. So things like API keys need to be on the server.

It also helps by data wrangling.

CORS prevents it. Server to server communication dose not rely on CORS, only server to browser.

So, in summation, CORS and "secret keys" prevent direct browser to API communication.


```js
${e.target.query.value}
```
^ is the default on the frontend for look up things on your server.

**16 day forecast** API (it has an option for units.)
It has a lat and lon option
Their sample request uses city but I should use **lat and lon**

That 16 day forecast will look almost exactly like the weather.json file.

We don't want to make our deployed sites pull from local host, we want to pull from  a deployed server. We'll be using heroku

REACT_APP_BACKEND_URL = http://localhost:3002

REACT_APP_BACKEND_URL = https:heroku site
