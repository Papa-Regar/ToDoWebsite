import React from 'react'


const List = (props) => {

    const deleteListHandler = (index) => {
        const newList = [...props.addList];
        newList.splice(index, 1);
        props.setAddList(newList);
    }

    return (
        <div style={{height: '100%'}}>
            <ul>
                {props.addList.map((addList, index) => (
                    <li key={index} style={{
                        listStyle:'none',
                        fontSize: 20,
                        textTransform: 'capitalize',
                        fontFamily: 'cursive',
                        }} >
                        {addList.list}  
                        <button onClick={() => deleteListHandler(index)} style={{
                            marginBlock: 10,
                            marginLeft: 20
                        }} >X</button>
                    </li>
                ))}
            </ul>
            </div>
    )
}

export default List
