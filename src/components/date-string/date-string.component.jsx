import React from 'react'

import './date-string.styles.scss'

export const DateString = ({date, children}) => {

    const stringDate = date => {
        let splitDate = String(date).split('-')
        let year = splitDate[0];
        let month = Number(splitDate[1]);
        let day = splitDate[2];
        const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        return `${months[month -1]} ${day} ${year}`
    }

    return <h5 className = 'string-date'>{children} {stringDate(date)}</h5>
}

export const GetYear = ({date}) => {

    const getYear = date => {
        let splitDate = String(date).split('-')
        return splitDate[0];
    }

    return  <h5 className = 'year-date'>{getYear(date)}</h5>
}
