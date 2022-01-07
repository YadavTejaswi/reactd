import './style.css';

const AboutUsPage = (props) => {
    return (
        <>
            <header>

                <div className="container">
                    <div className=" content">
                        <img src='./images/pic.jpg' alt="" width={400} height={500}></img>


                        <div className="left-content">
                            <button type="button" className="btn btn-outline-light butn">&larr;</button>
                            <button type="button" className="btn btn-outline-light butn2">&rarr;</button>

                            <h1>{props.values} <br /> {props.values1} </h1>
                            <h6>{props.values2}</h6>
                            <h6 className="white">{props.values2}</h6>
                            <h6 className="head">{props.values2} </h6>
                            <h4>{props.langs}</h4>
                            <p>{props.list}</p>
                            <i className="fa">&#xf01a;</i><span>{props.down}</span>

                        </div>
                    </div>
                    <h4 className="main-head">{props.bios}</h4>
                    <div className="content-sec">
                    <div className="left-sec">
                        <h5 className="color">{props.bios} </h5>
                        <h5>{props.bios}</h5>
                        <h5>{props.bios}</h5>
                        <h5>{props.bios}</h5>
                        </div>
                        <div className="right-sec">
                            <p>{props.para}</p>
                        </div>


                    </div>


                </div>
            </header>

        </>

    );

}
export default AboutUsPage;