import styled from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items:center;
`

export const ToDoList = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;

    ul {
        padding: 0;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    width: 340px;
    margin-right: 40px;
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    height: 40px;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    border: none;
    width: 130px;
`

export const ListItem = styled.div`
    background: #E4E4E4;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
    }
`