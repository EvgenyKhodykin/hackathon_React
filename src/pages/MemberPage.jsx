import { useLocation, useParams } from "react-router-dom"

function MemberPage() {
    const params = useParams()
    const location = useLocation()
    console.log(location.pathname)
    console.log(params)

    return <h1>MemberPage</h1>
}

export default MemberPage
