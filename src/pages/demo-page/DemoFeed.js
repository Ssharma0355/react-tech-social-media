import React, { useState } from 'react'
import Feed from '../feed/Feed'

function DemoFeed() {
    const [isDemo, SetIsDemo] = useState(true)
  return (
    <div>
        <Feed isDemo={isDemo} />
    </div>
  )
}

export default DemoFeed
