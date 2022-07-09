/* eslint-disable eqeqeq */
// the hook
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const HomePage = (props) => {
    const [ trans, i18n ] = useTranslation();

    const flowers = props.flowers.map(flower => {
            if(i18n.language == 'ar'){
                return ({
                    'id': flower.id,
                    'title': flower.title_ar,
                    'description': flower.description_ar,
                    //'image': flower.image
                });
            }
            return flower
    });

    return (
        <div>
            <section>
                <div className="posts">
                    {flowers.map(flower => 
                        <article>
                            <Link to={`/flower/${flower.id}`} className="image"><img src={`http://127.0.0.1:8000${flower.image}`} alt="" /></Link>
                            <h3>{flower.title}</h3>
                            <p>{flower.description}</p>
                            <ul className="actions">
                                <li><Link to={`/flower/${flower.id}`} className="button">
                                  { trans ('more')}
                                </Link></li>
                            </ul>
                        </article>
                    )}
                </div>
            </section>
            <div className="pagination">
                <span className="step-links">
                    <a href="?page=1">&laquo; first</a>
                    <a href="?page=">previous</a>
                    <span className="current">
                        Page number of num_pages.
                    </span>
                    <a href="?page=">next</a>
                    <a href="?page={">last &raquo;</a>
                </span>
            </div>
        </div>
    );
}


export default HomePage;