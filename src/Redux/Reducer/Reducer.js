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

const initialState = {
    isLoading: false,
    playcards: [],
    error: null,
    moreItems: [],
    isLoadingMore: false,
    moreError: null,
    isLoadingBookCards: false,
    bookCards: [],
    bookCardsError: null,
    isLoadingCardInfo: false, // Add new state for card info loading
    cardInfo: null, // Add new state for card info
    cardInfoError: null // Add new state for card info error
};

const Reducer = (state = initialState, action) => {
    console.log("action type......>", action);
    switch (action.type) {
        case GET_PLAYCARD_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_PLAYCARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                playcards: action.payload,
                error: null
            };
        case GET_PLAYCARD_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case SEE_MORE_START:
            return {
                ...state,
                isLoadingMore: true,
                moreError: null
            };
        case SEE_MORE_SUCCESS:
            return {
                ...state,
                isLoadingMore: false,
                moreItems: action.payload,
                moreError: null
            };
        case SEE_MORE_ERROR:
            return {
                ...state,
                isLoadingMore: false,
                moreError: action.payload
            };
        case GET_BOOKCARDS_START:
            return {
                ...state,
                isLoadingBookCards: true,
                bookCardsError: null
            };
        case GET_BOOKCARDS_SUCCESS:
            return {
                ...state,
                isLoadingBookCards: false,
                bookCards: action.payload,
                bookCardsError: null
            };
        case GET_BOOKCARDS_ERROR:
            return {
                ...state,
                isLoadingBookCards: false,
                bookCardsError: action.payload
            };
        case GET_CARDINFO_START:
            return {
                ...state,
                isLoadingCardInfo: true,
                cardInfoError: null
            };
        case GET_CARDINFO_SUCCESS:
            return {
                ...state,
                isLoadingCardInfo: false,
                cardInfo: action.payload,
                cardInfoError: null
            };
        case GET_CARDINFO_ERROR:
            return {
                ...state,
                isLoadingCardInfo: false,
                cardInfoError: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;
