// testing a API

const endPoint = "https://official-joke-api.appspot.com/random_joke";


function getJokes()
{
    fetch(endPoint)
    .then(
        function(response)
        {
            console.log(response)
            if(!response.ok){
                console.log("Sorry There is some error");
                return;
            }

            let data = response.json();
            data.then(function(resultData){
                console.log(resultData);
                console.log("Type of Data", typeof resultData);
            })
        }
    )
    .catch(function(error){
        console.log("Fetch error ", error);
    })
}

getJokes();