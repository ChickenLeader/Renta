const OnlyMobile = (props) => {
    return (
        <div className="d-md-none d-block">
            {props.children}
        </div>
    )
}

export default OnlyMobile