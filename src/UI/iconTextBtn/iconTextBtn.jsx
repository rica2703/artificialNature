import './iconTextBtn.css';
export default function IconTextBtn({icon, text, onclick}) {
    return (
        <div onClick={onclick} className='iconTextBtnClass'>
            <h4>{icon}</h4>
            <p>{text}</p>
        </div>
    );
}