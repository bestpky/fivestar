import * as React from 'react'

import './index.css'


interface IProps {
    percent?: number
}

const SingleStar = ({ percent = 1 }: IProps) => {
    const width = 20 * percent
    return (
        <div className="single-star">
            <div className="inner" style={{ width }} />
        </div>
    )
}

export default SingleStar
