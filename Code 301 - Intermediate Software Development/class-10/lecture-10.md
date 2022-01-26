We are going to start cache-ing data.

```js
// this cache holds recently made requests to api
// specificy what this cash will look like
// key: whatever user request
// value {data to be sent back to client.
// timestamp: when data was saved
// recipes: array of recipes
//}
let cache = {}

function getRecipes(request, response) {
  const ingredients = request.query.ingredient;
  if(cache[ingredient] && 
    Date.now() - cache[ingredient].timestamp < 1000 * 60 * 60 * 12) {//checks for 12hrs
    //we have a cache hit! that request was made and we've stored the data already in our cache.
    console.log('cahce hit, yay');
    response.send(cache[ingredient].recipes);
  } else {
    // we have a cache miss! That ingredient is "new", nobody has searched for it recently.
    // make the request & store the response in our cache for next time.
    console.log('cache miss, boo');
    const url = ``

    axios
      .get(url)
      .then(res => {
        const recipeArr = res.data.hits.map(recipe => new recipe (recipe.recipe));
        // save the recipe data into the cache for the next time
        cache[ingredients] = {
          timestamp: Date.now(),
          recipes:recipeArr
        };
        response.status(2002).send(recipeArr);
      })
      .catch(err => {
        console.log('error', err)
      })
  }
}
```

For City Explorer:

cache data and current time. Within 12hrs, fetch new data.
**Cache invalidation**
capture date with **Date.now()**


differences in started code.

```js
const key = 'weather-' + latitude + longitude;
```