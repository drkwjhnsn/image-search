# Image Search

Responsive web-app for searching Getty Image API

### Installing

Install npm dependencies

```
npm install
```

Build frontend with webpack

```
npm run build
```

Start express server

```
npm run serve
```

If running locally, the server will default to localhost at port 3000


## Deployment

if you have Heroku installed locally the app can be deployed navigating to the root directory in the terminal and running:

```
git push heroku master
```
Otherwise an instance is currently deployed [here](https://peaceful-wildwood-79598.herokuapp.com/) (NB: This is a feature branch deployment with an infinite scroll component not included in the master branch).

## Design Choices

Architecturally the app is pretty straightforward:
1. The Express server serves a bundled React frontend and a static page to run the script
2. User inputs a search phrase that is sent back to the Express server
3. Utility functions on the server perform the required spell-checking
4. The edited phrase is sent to the Getty API, which returns relevant image data
5. Express sends the data back to the frontend
6. Image collection data is stored in the app's state
7. Actual images are pulled from Getty through URIs in the frontend state.

The API calls needed to be made in the backend because they required an API key to be sent in the header. Getty provides no way to constrain authenticated calls to specified domains.

The spell-checking functions were also kept on the server namely to reduce the size of the initial load. The functions require a rather large dictionary to work (around 5Mb) and the computational burden on the backend is just not a concern at this stage.

A few assumptions were made concerning the spell-checking functions:
1. The functions should only be concerned with English words and Latin letters
2. Words that cannot cannot find matches in the dictionary should be sent to the API unaltered
3. Users should be able to enter multi-word phrases
4. Allowance of single spaces are desirable despite the restriction on non-alphabetic characters

The first assumption is just a practical matter of scope. The next two were UX decisions recognizing the desired result of typical use cases. And the final assumption was a necessary conclusion of the one prior. The spaces are necessary to delimit words or else every multi-word phrase would be clumped together in a nonsensical compound word.

The frontend architecture was kept minimal given the small size of the app. CSS frameworks, preprocessing and compilation were deemed unnecessary. A framework would have been too bulky for the desired minimalist design and the effort to write preprocessor boilerplate wouldn't have paid off.

State management is unnecessary to handle the minimum specifications, however it does make integration of important UX features like spinners, conditional notifications, and input validation much easier. Because these features seem to be able to go everywhere they tend to grow state complexity exponentially. If any broader functionality were required, I would have integrated Redux.

Although the backend is far from needing to optimize for scale, my first consideration would naturally be using more instances of the express server behind a load balancer. After that I would consider breaking out the string processing functions into microservices.
