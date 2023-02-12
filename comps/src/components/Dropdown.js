import { useState } from 'react';

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);

    };

    const renderedOprtions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    return <div>
        <div onClick={handleClick}>Select...</div>
        {isOpen && <div>{renderedOprtions}</div>}
    </div>
};

export default Dropdown;