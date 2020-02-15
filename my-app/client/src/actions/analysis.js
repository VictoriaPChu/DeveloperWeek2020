import {
    PROCESS_TEXT, 
    PROCESS_FAIL, 
    CLEAR_DATA
} from './types';
import {setAlert} from './alerts';

export const processText = (text, username) => dispatch => {
    try {
        let body = JSON.stringify({text}); 
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };
        fetch('http://localhost:8000/api/processText', config)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const {score} = data;
                console.log(score)

                const res = {
                    data: {
                        text,
                        analysis: {
                            score
                        }
                    }
                }

                dispatch({
                    type: PROCESS_TEXT,
                    payload: res.data
                }); 
            });
        

        const numbers = [
            '19255487652',
            '14248351721',
            '15103040108',
            '14086502900'
        ]; 
        body = JSON.stringify({ numbers, username, text });
        config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };  
        fetch('http://localhost:8000/api/sms', config); 
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            //     const { score } = data;
            //     console.log(score)

            //     const res = {
            //         data: {
            //             numbers: [
            //                 '19255487652',
            //                 '14248351721',
            //                 '15103040108',
            //                 '14086502900'
            //             ],
            //             username 
            //         }
            //     }

            //     dispatch({
            //         type: PROCESS_TEXT,
            //         payload: res.data
            //     });
            // });
    } catch (error) {
        dispatch(setAlert('Unable to process text', 'danger'));

        // clear user data in store (auth)
        dispatch({
            type: PROCESS_FAIL
        });
    }
}

export const clearData = () => dispatch => {
    dispatch({
        type: CLEAR_DATA
    }); 
}