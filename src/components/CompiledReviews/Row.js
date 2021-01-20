import React from 'react'
import { Component } from 'react'

class Row extends React.Component {

    render() {
        const {users, rowReview, id} = this.props
        console.log('rowReview:', rowReview, 'id', id,'users', users)
        let ratingsArray = [];
        let firstValidUser = null;
        for(let user in rowReview) {
            console.log(user)
            if(!firstValidUser){
                firstValidUser = user
            }
            console.log(rowReview[user])
            if(rowReview[user].rating === '.5'){
                ratingsArray.push(0.5)
            }
            else{
                ratingsArray.push(parseInt(rowReview[user].rating))
            }
        }
        
        let min = Math.min(...ratingsArray)
        let max = Math.max(...ratingsArray)
        console.log(ratingsArray, 'ratingsarray')

        console.log(max, min, 'max -min')
        
        const usersColumnRatings = users.map((user,key) => <td className='table-row' key={key}>{(rowReview[user])?rowReview[user].rating :'no rating'}</td>)

        return <tr id={id} className={(max-min > 1)?'table-row-container differentRatings':'table-row-container'}>
            <td className='table-card-names'>{(max-min > 1)?`${rowReview[firstValidUser].card_name} (difference)`:rowReview[firstValidUser].card_name}</td>
            {usersColumnRatings}
        </tr>        
    }
}

export default Row