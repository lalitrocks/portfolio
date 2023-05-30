// ball size inc when when mouse enter a html dom
function UseBallMaxSize(balldiv) {
    if (balldiv.current !== null) {
    balldiv.current.style.height = "100px"
    balldiv.current.style.width = "100px"
    balldiv.current.style.opacity = "0.2"
    }
}

// ball size dec when when mouse exits hovering a html dom
function UseBallSmallSize(balldiv) {
    if (balldiv.current !== null) {
    balldiv.current.style.height = "20px"
    balldiv.current.style.width = "20px"
    balldiv.current.style.opacity = "0.4"
    }
}


export { UseBallMaxSize as bigBall, UseBallSmallSize as smallBall};