import React from 'react'
import AddBook from './AddBook'

const UpdateBook = (props) => {
    return (
        <div>
            <AddBook flag={true} showAlert={props.showAlert} alert={props.alert} />
        </div>
    )
}

export default UpdateBook
