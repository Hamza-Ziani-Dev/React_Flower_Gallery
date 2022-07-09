import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const DetailPage = (props) => {
    // const [ i18n ] = useTranslation();
    const { id } = useParams();
    const [ flower, setFlower ] = useState({})

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/flowers/${id}/`, {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${props.token}`
            },
        })
        .then(res => res.json())
        .then(result => {
            setFlower(result);
        });
    }, [id, props.token]);

    return (
        <section>
            <header className="main">
                <div>
                    Liked: By [
                username , 
                    ]
                </div>
                <div>
                    DisLiked: By [
                username , 
                    ]
                </div>
                    {/* <h1>
                        {
                            i18n.language === 'ar' ?
                            flower && flower.title_ar :
                            flower && flower.title
                        }  
                    </h1>           */}
                <form method="POST" action="">
                        <button type="submit" value="like" name='like'><i className="far fa-heart"></i></button>
                        <button type="submit" value="dislike" name='dislike'><i className="fas fa-heart-broken"></i></button>										
                </form>            
            </header> 

            <span className="image main"><img src={`http://127.0.0.1:8000${flower && flower.image}`} alt="" /></span>
            {/* <p> 
                {
                    i18n.language === 'ar' ?
                    flower && flower.description_ar :
                    flower && flower.description
                }  
            </p> */}
        </section>
    )
}


export default DetailPage;