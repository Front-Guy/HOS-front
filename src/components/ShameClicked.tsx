import SyntaxHighlighter from 'react-syntax-highlighter';

interface IShameClicked {
    item : any
    setClicked : Function
    clicked : string
}

const ShameClicked = ({item, clicked, setClicked} : IShameClicked) => {
    return (
        <div className={`shame-clicked-container ${clicked}`} onClick={()=> setClicked("")}>
            <div className={`shame-clicked`}>
                <h2>{item.name} par <span>{item.author}</span></h2>
                <div className={"shame-clicked__description"}>
                    <p>{item.description}</p>
                    <SyntaxHighlighter language="javascript" >
                        {item.content}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default ShameClicked;