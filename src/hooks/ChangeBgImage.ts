import React, { ReactElement, useEffect } from 'react'

// not really a hook but no better place to leave this.  Move to utils if ever needed.

const ChangeBgImage = (props: {newImage: ReactElement}) => {
  useEffect(() => {
    const bgImageDiv = document.getElementById('bg') as HTMLElement
    if (bgImageDiv != null) {
      bgImageDiv.style.backgroundImage = `url(${props.newImage})`
    }
  }, [])

  return null
}

export default ChangeBgImage
