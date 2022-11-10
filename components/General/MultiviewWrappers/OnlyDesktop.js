const OnlyDesktop = (props) => {
    return (
        <div className="d-none d-md-block">
            {props.children}
        </div>
    )
}

export default OnlyDesktop