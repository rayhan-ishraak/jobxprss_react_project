import React from 'react'
import { useSelector } from 'react-redux'
import './home.css'

const TrendingKeywords = () => {

    const trendingKeywords = useSelector(state => state.trendingKeywords)

    return (
        <>
        {trendingKeywords.map((word) => (
            <span key={word.keyword}>
                {/* eslint-disable-next-line */}
                <a>{word.keyword}</a>
            </span>
        ))}
        </>
    )
}

export default TrendingKeywords
