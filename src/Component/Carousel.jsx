//all the necessary imports for the carousel function
import React, { useState } from "react";
import Radium from "radium";

export default Radium(function Carousel({ album }) {
    //styling using radium
    const style = {
        carousel: {
            "margin": "20px 5px",
            "borderRadius": "0.5rem",
            "minWidth": "300px",
            "maxWidth": "300px",
            "cursor": "pointer",
            "boxShadow": "0 0 10px 2.5px gray",
            "transition": "all 0.25s ease-in-out",
            ':hover': {
                "boxShadow": "0 0 10px 5px #555",
                "transform": "scale(1.05)"
            }
        },

        H5: {
            "textDecoration": "line-through",
        },
        P: {
            "textDecoration": "line-through",
        }
    }

    //defining the states for carousel componenet
    const [albumData, setAlbumData] = useState(album);
    const [deleteAlbum, setDeleteAlbum] = useState([]);
    const [albumBody, setAlbumBody] = useState("");

    //delete button functionality
    async function onDeleteHandler(deleteId) {
        console.log(deleteId);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1${deleteId}`, {
            method: 'DELETE',
        });
        const responseJSON = await response.json();
        if (responseJSON) {
            console.log("Dummy Deleted ");
            console.log(responseJSON);
            const tempArray = [...deleteAlbum, deleteId]
            setDeleteAlbum(tempArray);
        }
    }

    //function for handling modification functionality
    async function onSubmitHandler(event) {
        event.preventDefault();
        const albumId = event.target[0].value;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${albumId}`, {
            method: 'PUT',
            body: JSON.stringify({
                body: albumBody,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseJSON = await response.json();
        console.log(responseJSON);
        const modifiedData = albumData.map(element => {
            if (element.id === responseJSON.id) {
                return ({ ...element, title: albumBody })
            }
            else {
                return element;
            }
        });
        setAlbumData(modifiedData);
        setAlbumBody('')
    }
    //For dipslaying all the items inside the ablumn array using the map function
    return (
        <>
            <div
                id={`carouselExampleDark_${albumData[0].userId}`}
                className="carousel carousel-dark slide w-25"
                data-bs-ride="carousel"
                style={style.carousel}
            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div className="carousel-inner" style={{ "borderRadius": "0.75rem" }}>
                    {
                        albumData.map((item) => {
                            return (
                                <>
                                    {
                                        (
                                            (item.id === 1) || (item.id === 11) || (item.id === 21) || (item.id === 31) || (item.id === 41) ||
                                            (item.id === 51) || (item.id === 61) || (item.id === 71) || (item.id === 81) || (item.id === 91)
                                        ) ?
                                            <div key={item.id} className="carousel-item active" data-bs-interval="5000" >

                                                {item.id === 1 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/418/400/HD-wallpaper-your-name-anime.jpg" alt="..." />}
                                                {item.id === 11 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/562/860/HD-wallpaper-anime-landscape-stars-night-scenic-anime.jpg" alt="..." />}
                                                {item.id === 21 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/923/495/HD-wallpaper-anime-landscape-sunset-anime-girl-starry-sky-bicycle-anime.jpg" alt="..." />}
                                                {item.id === 31 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/869/808/HD-wallpaper-your-name-animated-anime-japan-movies.jpg" alt="..." />}
                                                {item.id === 41 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/418/400/HD-wallpaper-your-name-anime.jpg" alt="..." />}
                                                {item.id === 51 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/562/860/HD-wallpaper-anime-landscape-stars-night-scenic-anime.jpg" alt="..." />}
                                                {item.id === 61 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/923/495/HD-wallpaper-anime-landscape-sunset-anime-girl-starry-sky-bicycle-anime.jpg" alt="..." />}
                                                {item.id === 71 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/869/808/HD-wallpaper-your-name-animated-anime-japan-movies.jpg" alt="..." />}
                                                {item.id === 81 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/418/400/HD-wallpaper-your-name-anime.jpg" alt="..." />}
                                                {item.id === 91 && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/562/860/HD-wallpaper-anime-landscape-stars-night-scenic-anime.jpg" alt="..." />}

                                                <div className="carousel-caption d-md-block" style={{ "backgroundColor": "rgba(240,248,255,0.9)", "borderRadius": "0.5rem", "padding": "10px" }}>
                                                    <h5 className="display-6">Album {item.userId}</h5>

                                                    {
                                                        deleteAlbum.includes(item.id) &&
                                                        <>
                                                            <h5 style={style.H5}>Title {item.id}</h5>
                                                            <p style={style.P}>{item.title}</p>
                                                        </>
                                                    }
                                                    {
                                                        !deleteAlbum.includes(item.id) &&
                                                        <>
                                                            <h5>Title {item.id}</h5>
                                                            <p>{item.title}</p>
                                                        </>
                                                    }

                                                    <div className="d-flex flex-row justify-content-evenly w-100 py-3" style={{ "position": "relative" }}>
                                                        <button onClick={() => { onDeleteHandler(item.id) }} type="button" className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-outline-dark"><i className="fa-solid fa-music"></i> &nbsp;Modify</button>

                                                        <div className="collapse" id={`collapseExample_${item.id}`} style={{ "position": "absolute", "top": "-175%", "zIndex": "5" }}>
                                                            <div className="card card-body" style={{ "width": "100%" }}>
                                                                <form onSubmit={onSubmitHandler}>
                                                                    <input type="text" value={item.id} hidden />
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput3" className="form-label">Enter Body</label>
                                                                        <input onChange={(e) => { setAlbumBody(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput3" value={albumBody} placeholder="Enter Body" required></input>
                                                                    </div>
                                                                    <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                                                        <button type="submit" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-success" data-bs-dismiss="modal"><i className="fa-solid fa-square-check"></i></button>
                                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-danger" data-bs-dismiss="modal"><i className="fa-solid fa-rectangle-xmark"></i></button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div key={item.id} className="carousel-item" data-bs-interval="5000">

                                                {(item.id > 1 && item.id < 11) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/614/132/HD-wallpaper-anime-landscape-sunset-clouds-falling-stars-anime-girl-scenery-anime.jpg" alt="..." />}
                                                {(item.id > 11 && item.id < 21) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/695/161/HD-wallpaper-anime-scenery-sunset-anime-school-girl-clouds-artwork-anime.jpg" alt="..." />}
                                                {(item.id > 21 && item.id < 31) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/468/979/HD-wallpaper-anime-landscape-falling-stars-sunset-clouds-anime-girl-scenic-anime.jpg" alt="..." />}
                                                {(item.id > 31 && item.id < 41) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/522/207/HD-wallpaper-anime-landscape-houses-scenic-clouds-nature-anime.jpg" alt="..." />}
                                                {(item.id > 41 && item.id < 51) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/14/646/HD-wallpaper-anime-landscape-mountains-scenic-clouds-stars-stream-anime.jpg" alt="..." />}
                                                {(item.id > 51 && item.id < 61) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/624/977/HD-wallpaper-anime-sunset-landscape-scenic-clouds-anime.jpg" alt="..." />}
                                                {(item.id > 61 && item.id < 71) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/102/699/HD-wallpaper-anime-landscape-sunset-house-clouds-sky-scenic-anime.jpg" alt="..." />}
                                                {(item.id > 71 && item.id < 81) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/844/42/HD-wallpaper-anime-landscape-torii-sunset-clouds-scenic-anime.jpg" alt="..." />}
                                                {(item.id > 81 && item.id < 91) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/925/478/HD-wallpaper-anime-landscape-night-scenic-clouds-trees-anime.jpg" alt="..." />}
                                                {(item.id > 91 && item.id < 101) && < img height={"350px"} width={"500px"} src="https://w0.peakpx.com/wallpaper/320/56/HD-wallpaper-anime-landscape-sunset-train-clouds-scenic-fence-anime.jpg" alt="..." />}

                                                <div className="carousel-caption d-md-block" style={{ "backgroundColor": "rgba(240,248,255,0.9)", "borderRadius": "0.5rem", "padding": "10px" }}>
                                                    <h5 className="display-6">Album {item.userId}</h5>

                                                    {
                                                        deleteAlbum.includes(item.id) &&
                                                        <>
                                                            <h5 style={style.H5}>Title {item.id}</h5>
                                                            <p style={style.P}>{item.title}</p>
                                                        </>
                                                    }
                                                    {
                                                        !deleteAlbum.includes(item.id) &&
                                                        <>
                                                            <h5>Title {item.id}</h5>
                                                            <p>{item.title}</p>
                                                        </>
                                                    }

                                                    <div className="d-flex flex-row justify-content-evenly w-100 py-3" style={{ "position": "relative" }}>
                                                        <button onClick={() => { onDeleteHandler(item.id) }} type="button" className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-outline-dark"><i className="fa-solid fa-music"></i>&nbsp;Modify</button>

                                                        <div className="collapse" id={`collapseExample_${item.id}`} style={{ "position": "absolute", "top": "-175%", "zIndex": "5" }}>
                                                            <div className="card card-body" style={{ "width": "100%" }}>
                                                                <form onSubmit={onSubmitHandler}>
                                                                    <input type="text" value={item.id} hidden />
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput3" className="form-label">Enter Body</label>
                                                                        <input onChange={(e) => { setAlbumBody(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput3" value={albumBody} placeholder="Enter Body" required></input>
                                                                    </div>
                                                                    <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                                                        <button type="submit" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-success" data-bs-dismiss="modal"><i className="fa-solid fa-square-check"></i></button>
                                                                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample_${item.id}`} className="btn btn-danger" data-bs-dismiss="modal"><i className="fa-solid fa-rectangle-xmark"></i></button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                    }
                                </>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleDark_${albumData[0].userId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
})