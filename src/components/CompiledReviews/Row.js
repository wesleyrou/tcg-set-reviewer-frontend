import React from 'react'
import { Component } from 'react'

class Row extends React.Component {

    render() {
        const {users, rowReview} = this.props
        console.log(rowReview)
        const usersColumnRatings = users.map((user,key) => <div className='table-row' key={key}>{(rowReview[user])?rowReview[user].rating :'no rating'}</div>)

        return <div className='table-row-container'>
            <div className='table-card-names'>{rowReview[users[0]].card_name}</div>
            {usersColumnRatings}
        </div>
    }
}

export default Row