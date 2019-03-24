/**
 * Created by hayakasa on 2019/02/21.
 */
require('isomorphic-fetch');
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const fs = require('fs');

const unsplash = new Unsplash({
    applicationId: process.env.UNSPLASH_APP_ID,
    secret: process.env.UNSPLASH_APP_SECRET
});

unsplash.users.collections("hayakasa")
    .then(toJson)
    .then(json => {
      fs.writeFileSync('public/collections.json', JSON.stringify(json));
      json.map(item => (
        unsplash.collections.getCollectionPhotos(item.id, 1, 100, "popular")
          .then(toJson)
          .then(json => {
            fs.writeFileSync('public/collection_'+item.id+'.json', JSON.stringify(json));
          })
      ))
    });
