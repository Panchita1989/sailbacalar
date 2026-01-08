import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const GoogleAdsPageView = () => {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname
      })
    }
  }, [location])

  return null
}

export default GoogleAdsPageView
