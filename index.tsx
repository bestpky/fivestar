/**
 * ⭐️五角星组评分，支持自定义单个⭐️大小，总数
 */
import * as React from 'react'

import  './index.css'
import SingleStar from './SingleStar'

interface IProps {
    total?: number
    percent?: number
    singleSize?: number
}

const FiveStarGroup = ({ total = 5, percent = .8, singleSize = 20 }: IProps) => {
    const starGroup = []
    const score = percent * 100,
        singleScore = 100 / total
    const incompleteIndex = Math.ceil(score / singleScore)
    const remainder = score % singleScore
    const singlePercent = remainder / singleScore
    for (let i = 1; i <= total; i++) {
        let temp: number
        if (i < incompleteIndex) {
            temp = 1
        } else if (i === incompleteIndex) {
            temp = singlePercent === 0 ? 1 : singlePercent
        } else {
            temp = 0
        }
        starGroup.push(<SingleStar key={i} percent={temp} />)
    }
    const scale = singleSize / 20
    return <div className="five-star" style={{ transform: `scale(${scale})` }}>{starGroup}</div>
}

export default FiveStarGroup
