import React from 'react';

//todo здесь нужно сделать импорт стилей из './UserCard.scss'
import './UserCard.scss'

// todo здесь нужно сделать экспорт функии под названием UserCard с аргументом props
//  нужно деструктуризировать объект props и достать из него переменную user
//  детальнее про деструктуризацию тут: https://learn.javascript.ru/destructuring#destrukturizatsiya-obekta
//  сделать проверку если !user (т.е. он или undefined или null или путая строка или 0), то вернуть null
//  иначе:
//  с помощью деструктуризации достанем из  объекта user такие поля как first_name, last_name, email, address, _links
//  вернем блок div c классом "may-user-card card",  он должен содержать в себе:
//  1) блок img c src равным avatar.href и классом "may-user-card-avatar rounded-circle"
//  2) div с классом card-body
//  этот div будет содержать:
//  - блок h4 с классом card-title, он должен вывести имя и фамилию (first_name, last_name)
//  - блок div c классом "card-text", содержащий 2 div блока для поля email и поля address
export const UserCard = (props) => {
    const {user} = props;
    if (!user) return null;
    const {first_name, last_name, email, address, _links} = user;
    return (
        <div className='may-user-card'
             style={{float: 'left', border: '1px solid black', marginTop: '20px', marginLeft: '20px'}}>
            <img className='may-user-card-avatar rounded-circle' src={_links.avatar.href} alt="avatar" style={{
                marginLeft: '20px',
                height: '70px'
            }}/>
            <div className='card-body'>
                <h4 className='card-title'>{first_name} {last_name}</h4>
                <div className='card-text'>
                    <div>{email}</div>
                    <div>{address}</div>
                </div>
            </div>
        </div>
    )
};

