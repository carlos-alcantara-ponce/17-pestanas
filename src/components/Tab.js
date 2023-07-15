import React from 'react';


const Tab = props => {

    const { tabSelected, selected, setSelected } = props;
    const { label, content } = tabSelected;

    const handlesetSelected = (e, selected) => {

        setSelected(selected);
    }



    return (
        <>
            <button onClick={e => handlesetSelected(e, selected)}
                className="button btn-secondary d-inline-block mx-2 px-2">
                {label}
            </button >
        </>
    )

}



export default Tab;