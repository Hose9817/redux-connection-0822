import {v4 as uuid} from 'uuid';

const initialState = {
    cards: [
        {
            id: uuid(),
            name: 'Mary',
            priority: 1,
            status: 'todo'
        },
        {
            id: uuid(),
            name: 'David',
            priority: 2,
            status: 'preview'
        },
        {
            id: uuid(),
            name: 'Alice',
            priority: 3,
            status: 'progress'
        },
        {
            id: uuid(),
            name: 'Steve',
            priority: 4,
            status: 'done'
        }
    ],
    columns: [
        {
            id: uuid(),
            status: 'todo'
        },
        {
            id: uuid(),
            status: 'progress'
        },
        {
            id: uuid(),
            status: 'review'
        },
        {
            id: uuid(),
            status: 'done'
        },
    ]
};

const kanban = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, {
                    id: uuid(),
                    name: 'Name',
                    priority: 1,
                    status: 'todo'
                }]
            }

        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el.id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        default:
            return state
    }
};

export default kanban;