export default async function getWeather(BASE, KEY){
    const res = await axios.get(BASE + 'current?access_key=' + KEY + '&query=Lviv' );
    return res.data;
    }
