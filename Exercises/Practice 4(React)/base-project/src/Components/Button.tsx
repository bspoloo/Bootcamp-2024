import '../App.css'
function SayHello(tittle: String) {
    return 'Hello ' + tittle;
}
const list = [
    {
        name: 'pikachu',
        type: 'Electrus'
    },
    {
        name: 'bulbasaur',
        type: 'Grass'
    }
]

function Button() {
    const tittle = 'Button click';
    const flipCoin = Math.random() > 0.5;
    const className = Math.random() > 0.5 ? 'button1' : 'button2';
    const templateList = list.map(item => <li>{`${item.name} - ${item.type}`}</li>);
    // let content;
    // if(flipCoin){
    //     content = <h1>Login</h1>
    // }else{
    //     content = <h1>Welcome</h1>
    // }
    return <>
        {/* {content} */}
        {flipCoin ? <h1>Login</h1> : <h1>Welcome</h1>} {/* Si el flipcoin es 0.5 que muestre login, caso contrario el welcome/}
        {flipCoin && <h1>Cara</h1>} {/* Si el flipcoin es 0.5 que muestre el cara*/}
        <ul>
            {templateList}
        </ul>
        <button className={className}>{SayHello(tittle)}</button>
    </>
}

export default Button;