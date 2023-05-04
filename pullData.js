// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
var query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

var userIDQuery = `
query ($name: String) {
    User(name: $name) {
      id
    }
  }
`;

var mediaListQuery = `
query ($id: Int) {
    User(id: $id) {
      status
    }
  }
`;

// {
//     Viewer(id: 5937728) {
//       User {
//         statistics
//         {
//           anime
//         }
//       }
//     }
//   }
  

//
//
// NEED AUTH TO GET SPECIFIC USER DATA
// CANT QUERY LOCALLY, LOGIN REQUIRED & THEN STORE DATA IN DB TO COMPARE
//

// Define our query variables and values that will be used in the query request
var userVariables = {
    name: "anizro",
    id: 0
};

// function runUserQuery()
// {
//     // Make the HTTP Api request
//     fetch(getIDURL, options).then(handleResponse)
//                         .then(handleData)
//                         .catch(handleError);
// }

// function getMediaList()
// {
//     // Make the HTTP Api request
//     fetch(getMediaListURL, options).then(handleResponse)
//                         .then(handleMediaData)
//                         .catch(handleError);
// }
// // Define the config we'll need for our Api request
// var getMediaListURL = 'https://graphql.anilist.co',
//     options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             query: mediaListQuery,
//             variables: userVariables
//         })
//     };

// var authURL = 'https://graphql.anilist.co',
// options = {
//     method: 'POST',
//     headers: {
//         'Authorization': 'Bearer ' + accessToken,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify({
//         query: query
//     })
// };

//fetch(url, options).then(handleResponse, handleError);


// // Define the config we'll need for our Api request
// var getIDURL = 'https://graphql.anilist.co',
//     options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             query: userIDQuery,
//             variables: userVariables
//         })
//     };

// // Define the config we'll need for our Api request
// var url = 'https://graphql.anilist.co',
//     options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             query: query,
//             variables: variables
//         })
//     };



// function handleResponse(response) {
//     return response.json().then(function (json) {
//         return response.ok ? json : Promise.reject(json);
//     });
// }

// function handleMediaData(data) {
//     console.log(data);
//     document.getElementById("query-text1").innerHTML = data.data.User.id;
// }

// function handleData(data) {
//     console.log(data);
//     userVariables.id = data.data.User.id;
//     getMediaList();
// }

// function handleError(error) {
//     alert('Error, check console');
//     console.error(error);
// }

// function checkForAuth()
// {
//     var url = window.location;
//     var access_token = new URLSearchParams(url.search).get('access_token');
//     console.log(access_token);
// }


window.onhashchange = function() {
    // code goes here
    console.log("Hash Changed!")
}
