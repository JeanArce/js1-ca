const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '533c1a9ab5msh4e4948fee8030a5p14158cjsn6715e56c9e8e',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";

const getAnimes = async() => {
    try {
        const fetchDataAnime = await fetch(url, options);
        const jsonDataAnime = await fetchDataAnime.json();
        console.log(jsonDataAnime);


    } catch(error) {
        console.log(error);
    }
};
getAnimes();



