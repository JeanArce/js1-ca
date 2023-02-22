// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '533c1a9ab5msh4e4948fee8030a5p14158cjsn6715e56c9e8e',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a365da0a30mshee7bb8a4c39fe8ap1d21ecjsnd3a290bd29a2',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";
const itemsContainer = document.querySelector("#uniqueItemContainer");
const getAnimes = async() => {
    
    itemsContainer.innerHTML = `<img class="loadingImage" src="loading.gif" alt="loading">`;
    try {
        const fetchDataAnime = await fetch(url, options);
        const jsonDataAnime = await fetchDataAnime.json();
        console.log(jsonDataAnime);
        
        

        itemsContainer.innerHTML = "";
        
        const { data } = jsonDataAnime;
        for(let i = 0; i < data.length; i++) {
            const objData = data[i];
            
            const {_id, image, title, synopsis, genres} = objData;
            
            let resultHtml = `
                <div class='item'>
                    <div class="itemContent">
                        <img src="${image}" alt="${title}">
                        <div class="textItemContent">
                            <h4>${title}</h4>
                            <p>${synopsis}</p>
                            <ul>
            `;

            for(let val of genres) {

                resultHtml += `
                                <li>${val}</li>
                `
            }

            resultHtml += `
                            </ul>
                            <p class="seeMoreContent"><a href="details.html?id=${_id}">See more...</a></p>
                        </div>
                    <div>
                </div>
            `;

           
            itemsContainer.innerHTML += resultHtml;
        }

    } catch(error) {
        console.log(error);
        itemsContainer.innerHTML = `<p>Failed fetching api or reached maximum quota, 100 request per day.</p>`
    }
};

getAnimes();



