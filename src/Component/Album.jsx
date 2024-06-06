// all the necessary imports here
import React, { useEffect, useState } from "react"
import Carousel from "./Carousel";
import style from '../assets/Album.module.css'
import AddNewAlbum from "./AddNewAlbum";

export default function Album() {
    //defining states using hooks
    const [album, setAlbum] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [fetchedData, setFetchedData] = useState('');

    function onAddNewAlbum(data) {
        setAddNew(true)
        console.log(data);
        setFetchedData(data)
    }

    //On page load data  will be fetched from the API
    useEffect(() => {
        (async function fetchAlbumData() {
            const albumArray = [];
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const responseJSON = await response.json();

            for (let i = 0; i < responseJSON.length; i += 10) {
                let emptyArray = [];
                emptyArray = responseJSON.slice(i, [i + 10]);
                albumArray.push(emptyArray)
            }
            setAlbum(albumArray)
        })();
    }, []);

    return (
        <>
            <header>
                <h1 className={`display-1 text-center py-5 ${style.albumH1}`}> Albums list React App</h1>
            </header>
            <main className={style.albumMain}>
                <section className={style.albumSection}>
                    {
                        album.map((album) => {
                            return (<Carousel album={album} key={album[0].userId} />)
                        })
                    }
                    {
                        addNew &&
                        <div style={{ "borderRadius": "0.75rem", "backgroundColor": "aliceblue", "cursor": "pointer", "border": "1px solid black", "boxShadow": "0 0 10px 1.5px #888" }}>
                            <img height={"250px"} width={"300px"} style={{ "borderRadius": "1rem" }} src="https://w0.peakpx.com/wallpaper/728/790/HD-wallpaper-nature-animation-amoled-anime-landscape.jpg" alt="..." />
                            <div style={{ "backgroundColor": "rgba(240,248,255,0.9)", "borderRadius": "0.5rem", "padding": "10px" }}>
                                <h5 style={{ "textAlign": "center","textTransform":"capitalize" }}>{fetchedData.title} {fetchedData.id}</h5>
                                <p style={{ "textAlign": "centenpr" }} >{fetchedData.body}</p>
                            </div>
                        </div>
                    }
                    <AddNewAlbum onAddNewAlbum={onAddNewAlbum} />
                </section>
            </main>
            
        </>

    )
}