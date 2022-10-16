export default  function fetchAPI(url, option){
   const headers = {
      'Content-Type': 'application/json'
    }
   return fetch(url, {...option, headers}).then(response => response.json());
}