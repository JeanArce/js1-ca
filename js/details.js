
const queryString = document.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a365da0a30mshee7bb8a4c39fe8ap1d21ecjsnd3a290bd29a2',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};





const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;

const imageDetailsContainer = document.querySelector("#imageDetailsContainer");


async function getDetails() {

	imageDetailsContainer.innerHTML = `<img class="loadingInDetails" src="loading.gif" alt="loading">`;

	try {
		const fetchData = await fetch(url, options);
		const jsonData = await fetchData.json();
		document.title = jsonData.title ;

		createHtml(jsonData);
		
	
	} catch (error) {
		console.log(error);
		imageDetailsContainer.innerHTML = `<p>Failed fetching anime details.</p>`
	}

}

getDetails();

function createHtml(data) {
	const {image, title, synopsis, genres} = data;
 	imageDetailsContainer.innerHTML = `
		
		<img src="${image}" alt="details image">
		<h4>${title}</h4>
		<p>${synopsis}</p>
		<p class="genresStyle">${genres.join(",")}</p>
		
	`;

}