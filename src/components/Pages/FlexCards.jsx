

export default function ({title,desc,img}) {
    return (
        <>
            <div className="Cards" style={{width : "21rem"}}>
                <img style={{height: "19rem"}} src={img} className="card-img-top" />
                <div className="Card-body">
                    <h4 className="CardTitle pt-4">{title}</h4>
                    <p className="CardDesc pt-2">{desc}</p>
                </div>
            </div>
        </>
    )
}