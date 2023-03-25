const store = {};

// function to generate shortUrl
const generateShortUrl=(longUrl)=> {
 

  const hash = hashLink(longUrl);


  const shortUrl = longUrl.split('.')[0]+"."+longUrl.split('.')[1]+"."+longUrl.split('.')[2].split("/")[0]+"/" + hash;

  // Storing shortUrl with values
  store[shortUrl] = longUrl;

  return shortUrl;
}



function hashLink(string) {
  let hash = 0;
  if (string.length == 0) {
    return hash;
  }
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; 
  }
  return hash.toString(36);
}


// testing
const url ="https://www.objectivity.co.uk/industries/healthcare/";

//generated Link
const generatedShortUrl=generateShortUrl(url);

console.log(generatedShortUrl);

// access actual link using generated one
const original=store[generatedShortUrl];
 
console.log(original);