import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `KiDOI | ${title}`
    },[title])
}
export default useTitle;