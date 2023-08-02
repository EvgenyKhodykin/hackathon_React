function Loading() {
    return (
        <div className="d-flex justify-content-center" style={{ marginTop: "25%" }}>
            <div className="spinner-border" style={{ width: "50px", height: "50px", color: "#fb6c1d" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
