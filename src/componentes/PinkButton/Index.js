import './PinkButton.css'

const PinkButton = (props) => {
    return (
        <button 
            className='pink-button' 
            type={props.type || "button"}  // Permite passar o tipo do botão
            onClick={props.onClick}        // Repasse o evento onClick
        >
            {props.children}
        </button>
    );
}

export default PinkButton;
