const URL =
  'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=fc082035d227214183cee27bf0a4d22a&&format=json';

function getMusicData() {
  return fetch(`${URL}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map(artist => {
    return {
      id: artist.mbid,
      name: artist.name,
      image: artist.image[0]['#text']
    }
  }))
}

export {getMusicData}