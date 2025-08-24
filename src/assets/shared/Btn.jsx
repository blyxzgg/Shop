import "./Shared.css"

const Btn = ({ content, style = {}, onClick }) => {
    return (
        <>
            <button className="primaryBtn" style={style} onClick={onClick} >
                {content}
            </button>
        </>
    )
}

export default Btn