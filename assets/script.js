console.log('hello')
var gitrepo = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';

fetch(gitrepo,
{
 cache: 'reload',
})
 .then(function (response) {
  return response.json();
 })
 .then(function (data) {
  console.log(data[0].comments_url);

  console.log(data);
 });

 //can do the same thing with insomniea
