# MuteState ![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FWarkanlock%2MuteState) ![Node.js CI](https://github.com/Warkanlock/MuteState/workflows/Node.js%20CI/badge.svg?branch=master)

A lightweight framework to manipulate state using a queue based structure

<p align="center"><img src="https://imgshare.io/images/2020/06/15/twitter_profile_image.png"/></p>  
<p align="center"><img src="https://img.shields.io/badge/license-MIT-blue.svg"/> <img src="https://img.shields.io/github/issues/Warkanlock/MuteState"/> <img src="https://img.shields.io/github/repo-size/warkanlock/MuteState"/></p>

## How to use it

```javascript
//Add initial values
Mute.mutate(4);
Mute.mutate(1);
Mute.mutate(2);
Mute.mutate(3);

//Fetch latest or the
console.log(Mute.latest()); // OUTPUT: { lastest: 4 }
console.log(Mute.latestN(1)); // OUTPUT:  { last: 1 }

//You can add objects and manipulate it inside the queue
Mute.mutate({ a: 3 });

//0 is always the latest element added
console.log(Mute.get(0)); // OUTPUT: { value : { a: 3 }}

//And you can fetch all objects instead of just one
console.log(Mute.getAll()); // OUTPUT: { value: [ { a: 3 }, 3, 2, 1, 4 ] }
```

> Feel free to collaborate if you want!
