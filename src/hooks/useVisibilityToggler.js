// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

const useVisibilityToggler = (component, visibility = false) => {
    const [visible, setVisibility] = useState(() => visibility)
    return[
        visible ? component : null,
        () => setVisibility((v) => !v)
    ];
};

export default useVisibilityToggler
