import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ADD_CONTACT
} from './types';
import { setAlert } from './alerts';

export const register = ({ name, phone, email, password }) => async dispatch => {
    const contacts = [
        {
            name: 'Akshay Sathiya',
            email: 'akshay.sathiya@gmail.com',
            phone: '925 548 7652'
        },
        {
            name: 'Victoria Chu',
            email: 'victoria.p.chu@berkeley.edu',
            phone: '424 835 1721'
        },
        {
            name: 'Rebecca Abraham',
            email: 'rebeccaabraham@berkeley.edu',
            phone: '510 304 0108'
        },
        {
            name: 'Evan Lohn',
            email: 'evan.lohn@berkeley.edu',
            phone: '408 650 2900'
        }
    ]; 

    try {
        fetch('http://localhost:8000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username:name, phone, email, password, contacts })
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: {...data, contacts}
                });
            }); 
    } catch (error) {
        dispatch(setAlert('Unable to register new user', 'danger')); 

        // clear user data in store (auth)
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

export const login = ({ email, password }) => async dispatch => {
    try {
        // authenticate user 

        const body = JSON.stringify({ email, password });
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };


        fetch('http://localhost:8000/users/login', config)
            .then(res => res.json())
            .then(data => {
                const {username, phone, contacts} = data;
                console.log(contacts)
                console.log(typeof contacts)

                const contacts_parsed = JSON.parse(contacts)
                const res = {
                    data: { username, email, phone, contacts:contacts_parsed}
                }



                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                });
            })
        // const res = await axios.post('/api/auth', body, config);

    } catch (error) {
        // alert user of error 
        dispatch(setAlert('Unable to log in user', 'danger'))

        // clear user data in store (auth)
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

export const logout = (history) => dispatch => {
    // clear user data in store (auth)
    dispatch({
        type: LOGOUT
    });
}

export const addContact = (newContact, email) => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({contact: newContact, email})
    };
    
    fetch('http://localhost:8000/users/addContact', config); 

    dispatch({
        type: ADD_CONTACT, 
        payload: newContact
    }); 
}