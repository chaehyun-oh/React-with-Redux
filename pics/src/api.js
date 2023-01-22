import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID VIJgG3eIXbuZBD-mAgiVzRXFCK76fZ4TNCZ9045uxBA'
        },
        params: {
            query: 'cars',
        },
    });
    console.log(response);
    return response;
};

export default searchImages;