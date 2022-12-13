import React from 'react'

export default function Alert(popus) {

    const capitalize = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        //here we use popus.alert && means by default popus.alert is null.So if it is null then after && all statements is ignored otherwise all statement is run
        <div style={{ height: '50px' }}>
            {popus.alert && <div className={`alert alert-${popus.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(popus.alert.type)}</strong>: {popus.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}

        </div>


    )
}
