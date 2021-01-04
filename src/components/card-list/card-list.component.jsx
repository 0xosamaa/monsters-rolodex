import React from 'react'
import {Card} from '../card/card.component'
import './card-list.styles.css'

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => (
          // A key is defined for each tag to give them a stable identity
          <Card key={monster.id} monster={monster} />
        ))}
        </div>
)

// This is a component file that only does one job which is
// to display CardList.
// The props.children lets you access the children (of the div
// element above) which are in App.js file in CardList element.

// The styling is imported and used here.
