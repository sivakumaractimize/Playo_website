import { 
    GET_PLAYCARD_START, 
    GET_PLAYCARD_SUCCESS, 
    GET_PLAYCARD_ERROR,
    SEE_MORE_START,
    SEE_MORE_SUCCESS,
    SEE_MORE_ERROR,
    GET_BOOKCARDS_START,
    GET_BOOKCARDS_SUCCESS,
    GET_BOOKCARDS_ERROR,
    GET_CARDINFO_START,
    GET_CARDINFO_SUCCESS,
    GET_CARDINFO_ERROR

} from '../Actiontypes/Actiontypes';

export const getPlaycardStart = () => ({
    type: GET_PLAYCARD_START
});

export const getPlaycardSuccess = (playcards) => ({
    type: GET_PLAYCARD_SUCCESS,
    payload: playcards
});

export const getPlaycardError = (error) => ({
    type: GET_PLAYCARD_ERROR,
    payload: error
});

export const seeMoreStart = () => ({
    type: SEE_MORE_START
});

export const seeMoreSuccess = (moreItems) => ({
    type: SEE_MORE_SUCCESS,
    payload: moreItems
});
export const seeMoreError = (error) => ({
    type: SEE_MORE_ERROR,
    payload: error
});



export const getBookcardsStart = () => ({
    type: GET_BOOKCARDS_START
});

export const getBookcardsSuccess = (data) => ({
    type: GET_BOOKCARDS_SUCCESS,
    payload: data
});

export const getBookcardsError = (error) => ({
    type: GET_BOOKCARDS_ERROR,
    payload: error
});

export const getCardinfostart = () => ({
    type: GET_CARDINFO_START
});

export const getCardinfosuccess = (cardInfo) => ({
    type: GET_CARDINFO_SUCCESS,
    payload: cardInfo
});

export const getCardinfoerror = (error) => ({
    type: GET_CARDINFO_ERROR,
    payload: error
});
