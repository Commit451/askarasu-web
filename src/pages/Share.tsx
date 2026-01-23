import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.commit451.lalilulelo'
const APP_STORE_URL = 'https://apps.apple.com/app/askarasu/id123456789'

function Share() {
  const navigate = useNavigate()

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()

    if (/android/i.test(userAgent)) {
      window.location.href = PLAY_STORE_URL
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = APP_STORE_URL
    } else {
      navigate('/', { replace: true })
    }
  }, [navigate])

  return null
}

export default Share
