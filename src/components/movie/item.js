export default function ({ img, title, year }) {
    return (
        <div className='col-sm-3 my-2'>
            <div className="card">
                <img src={img} className="card-img-top" alt="Movie5" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">
                        <h5>{year}</h5>
                        Some quick example text to build on the card title
                        and make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
    );
}