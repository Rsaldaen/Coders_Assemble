//(from mini project 28) Similar but need to generate using array

// Returns html string for the given list object. 
const generateList = (list) => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <!-- Bootstrap CSS -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
    
        <title>List Genie</title>
      </head>
      <body
        class="d-flex min-vh-100 min-vw-100 justify-content-center align-items-center"
      >
        <main class="card" style="width: 18rem">
          <div class="card-header"><h1>Groceries</h1></div>
          <ul class="list-group list-group-flush">
            ${renderList(list)}
          </ul>
        </main>
      </body>
    </html>
    `;
  };
  module.exports = generateList;