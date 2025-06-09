import Desc from "./descr.jsx"

let sty={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"pink"
};

function Card(){
    return (
        <div className="cont" style={sty}>
        <Desc title="Logitech Keyboard" idx={0}/>
        <Desc title="Iphone 16 pro max" idx={1}/>
        <Desc title="IQoo 13" idx={2}/>
        <Desc title="PS5" idx={3}/>
        </div>
    );
}

export default Card;