

export default function Button({content, className, onClick}) {
    
    return(
        <button className={className} onClick={onClick}>{content}</button>
    )
}