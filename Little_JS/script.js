//for using async code in a function we used 'async' keyword before function
async function abcd(){
   var ans = await fetch(`https://google-translate1.p.rapidapi.com/language/translate/v2/detect`);
   ans = await ans.json();
   console.log(ans);
   console.log(ans.message);
}
abcd();