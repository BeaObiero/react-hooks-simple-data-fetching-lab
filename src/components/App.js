import React, { useState, useEffect} from "react";

function App() {

    const[loading, setLoading] = useState(true);
    const[dogImage, setDogImage] = useState('');// hook two pieces of state

    useEffect(() => {

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDogImage(data.message);
            setLoading(false);// data has been fetched successfully
        })
        .catch(error => {
            console.error('Error fetching the dog image', error);//logs any errors to console
        });
    }, []);
    //use of empty dependencies array so that the fetch will only run once

return (
    <div>
        {loading ? (
            <p>Loading...</p>)  :
            (<img src={dogImage} alt="A Random Dog"/>)//conditional statement if loading is true display statement, if loading is false show image and alt text
        }
    </div>
);
}

export default App;