import "./desc.css";
import Price from "./price.jsx";

function Descr({title,idx}){
    let oldpri=["4500","129883","60000","68921"];
    let newpri=["3499","89990","53999","45999"];
    let descr=[["8000 DPI","software supported"],["a17 chip","120 hz screen"],["144fps gaming beast","Best battery with ai features"],["spiderman gta v1 free","Boost performance"]];
    return (
        <div className="box">
            <h4><b>{title}</b></h4>
            <p>{descr[idx][0]}</p>
            <p>{descr[idx][1]}</p>
            <Price oldprice={oldpri[idx]} newprice={newpri[idx]}/>
        </div>
    );

}

export default Descr;