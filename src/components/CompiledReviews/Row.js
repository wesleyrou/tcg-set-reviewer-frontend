import React from 'react'
import { Component } from 'react'

class Row extends React.Component {

    render() {
        const {users, rowReview} = this.props
        console.log(rowReview)
        let ratingsArray = [];
        for(let user in rowReview) {
            console.log(user)
            console.log(rowReview[user])
            ratingsArray.push(parseInt(rowReview[user].rating))
        }
        
        let min = Math.min(...ratingsArray)
        let max = Math.max(...ratingsArray)
        console.log(ratingsArray, 'ratingsarray')

        console.log(max, min, 'max -min')
        
        const usersColumnRatings = users.map((user,key) => <div className='table-row' key={key}>{(rowReview[user])?rowReview[user].rating :'no rating'}</div>)

        return <div className={(max-min > 1)?'table-row-container differentRatings':'table-row-container'}>
            <div className='table-card-names'>{rowReview[users[0]].card_name}</div>
            {usersColumnRatings}
        </div>
    }
}

export default Row