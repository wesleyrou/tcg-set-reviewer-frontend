import React from 'react'
import apiService from '../../api-services/api-service';
import './CompiledReviews.css';
import Row from './Row';

class CompiledReviews extends React.Component {
    state = {
        reviews: {},
        users: [],
        firstCardId: null,
        lastCardId: null,
    }
    
    handleCompileClick = (e) => {   
        e.preventDefault()     
        let setCode = e.target['set-code'].value
        apiService.getAllCardReviews(setCode)
        .then(reviews => {            
            let users = []
            let hash = {};            
            for(let i = 0; i < reviews.length; i++) {
                let currentCard = reviews[i]
                if(!users.includes(currentCard.username)){
                    users.push(currentCard.username)
                }

                if(hash[currentCard.card_id]){
                    let internalHash = hash[currentCard.card_id]
                    internalHash[currentCard.username] = currentCard
                    hash[currentCard.card_id] = internalHash
                }
                else {
                    let internalHash = {}
                    internalHash[currentCard.username] = currentCard
                    hash[currentCard.card_id] = internalHash
                }
            }

            this.setState({reviews: hash, users: users, firstCardId: reviews[0].card_id, lastCardId: reviews[reviews.length-1].card_id})

            console.log(hash)
        })
    }

    render() {
        console.log(this.state.reviews,this.state.firstCardId)
        const usersColumnLabels = this.state.users.map((user,key) => <div className='table-row' key={key}>{user}</div>)
        let rows        
        if (this.state.lastCardId-this.state.firstCardId) {
            let array = Array(this.state.lastCardId-this.state.firstCardId).fill(0)
            rows = array.map((row,key) => <div key={key} id={key + this.state.firstCardId}><Row users={this.state.users} rowReview={this.state.reviews[key + this.state.firstCardId]}/></div>)
        }

        return <>
            <form onSubmit = {(e) => this.handleCompileClick(e)}>
                <fieldset>
                    <legend hidden>Get Compiled Reviews Form</legend>
                    <label htmlFor='set-code'>Set Code</label>
                    <input name='set-code' id='set-code'></input>
                    <button type='click'>Compile Reviews</button>
                </fieldset>
            </form>
            <div className='table-row-container'>
                {/* left corner table indent */}
                <div className='table-card-names'></div>
                
                {usersColumnLabels}
            </div>            
            {rows}
        </>
    }
}

export default CompiledReviews