import React from 'react'
import Blocks from './blocks'

const Homepage = ({parsedData}) => {
  return (
    parsedData && parsedData?.length > 0 && parsedData?.map(widget => (
      <React.Fragment key={widget?.block_id}>
        <Blocks widget={widget} />
      </React.Fragment>
    ))
  )
}

export default Homepage