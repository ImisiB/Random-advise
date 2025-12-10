const API_KEY = 'Sge6uzhiEW+sDDX6NR+esA==sal0MxtCUkulmgcn'; // Replace with your actual key, or use process.env.API_KEY
const url = `https://api.api-ninjas.com/v1/advice`;

document.querySelector('button').addEventListener('click', () => {

  fetch(url, {
  method: 'GET',
  headers: {
    'X-Api-Key': API_KEY, // The crucial header for API-Ninjas
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  document.querySelector('.advice').innerHTML = data.advice
})
.catch(error => {
  console.error('Error:', error);
});
})