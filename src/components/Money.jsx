import React from 'react';

const Money = (props) => {
    return (
        <div className='money'>
            <div>
                <span className='money_title'>Карты компьютера : {props.Score_bot} </span>
            </div>
            <div >
                <span className='money_title'>Деньги : {props.Money} $</span>
                <span className='money_title'>Ставка : {props.Input} $</span>
            </div>
        </div>
    );
};

export default Money;