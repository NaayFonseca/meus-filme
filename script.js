const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDJhMTZkYjNhMjI2NjNmZjUxNzc5YjQ1NTRmMmFjMiIsIm5iZiI6MTc1MjAxODcwOS43NzYsInN1YiI6IjY4NmRhZjE1NGE0YjQ0YTBkYWE5NjY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D6eXKkVH0LxotolX3FH6I20FDOh2RaXQGaOQmMCk_K8'
    }
}



fetch ('https://api.themoviedb.org/3/authentication', options)
.then(response => response.json())
.then(data =>{
 console.log(data);

})