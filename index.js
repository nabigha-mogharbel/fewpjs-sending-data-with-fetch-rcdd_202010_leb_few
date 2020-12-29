// Add your code here

function submitData(name,email){
  return fetch('http://localhost:3000/users',{method: "POST",
  headers: {'content-type': 'application/json' , 'Accept': 'application/json'},
  body: JSON.stringify({name,email})})
  .then(function(response) {
    return response.json();
  })
  
  .then(function(response){return response.json})
  .catch(function(error) {
    alert('Unauthorized Access');
  });
}
  
