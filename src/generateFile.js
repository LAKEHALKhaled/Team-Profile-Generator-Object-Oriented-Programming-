
  
  
  function generateFile(Team) {
    const iterator = Team.values();

for (const value of iterator) {
  console.log(value);
  for (const property in value) {
    console.log(`${property}: ${value[property]}`);


return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>Git it Done</title>
      
    </head>
    
    <body class="flex-column min-100-vh">
      <header class="hero">
        <h1 class="app-title"> Team </h1>
    
      </header>
        
          <div class="card">
            <h3 class="card-header text-uppercase">names ${property}: ${value[property]}</h3>
           <div>
    </body>
    
    </html>
    `
  }
}
}
  
  module.exports = generateFile;
  