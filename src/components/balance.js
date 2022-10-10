import React from "react";



const Balance = () => {
    return (
        <section className="balance-container" aria-label="your balance">
            <div className="text-container">
                <h4 className="h4-balance">My balance</h4>
                <h1 className="h1-balance" aria-label="921.48 dollars">$921.48</h1>
            </div>
            <img alt="logo" className="logo" src="../images/logo.svg" aria-label="logo"></img>
        </section>
    )
}


export default Balance