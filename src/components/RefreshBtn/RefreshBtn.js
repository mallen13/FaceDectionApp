


const RefreshBtn = () => {

    const pageRefresh = () => {
        window.location.reload(false);
    }

    return (
        <button onClick={pageRefresh}>Try Again</button>
    )
}

export default RefreshBtn;