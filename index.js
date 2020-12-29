// Add your code here

let configuration={method: "POST",
  header: {'content-type': '/json' , 'Accept': 'application/json'},
  body: JSON.stringify(data)};

function submitData(name,email){
  fetch('http://localhost:3000/users',configuration)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {document.getElementByTagName('body').innerHTML=`<p>${object}</p>`;
    console.log(object);
  })
  .catch(function(error) {
    alert('Unauthorized Access');
  });
}
  
