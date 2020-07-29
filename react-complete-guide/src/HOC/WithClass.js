import React from 'react';

const withClass = (WrappedComp, className) => {
    return props => (
        <div className={className}>
            <WrappedComp {...props} />
        </div>

    )
}

export default withClass;


/* Another way of creating HOC is below.

const withClass = props =>(
    <div className = {props.className}>
    {props.children}
    </div>
)

*/