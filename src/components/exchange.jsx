
export default function Exchange () {
    return (
        <>
        <div className="container">
        <div className="Header">
            <h1>CURRENCY EXCHANGE APP</h1>
        </div>
        <div className="balance">
            <h2>Balance</h2>
            <p>USD balance: 0 USD</p>
            <p>EUR balance: 0 EUR</p>
            <p>XAF balance: 0 XAF</p>
        </div>
        <div className="exchange">
            <h2>Exchange Currency</h2>
            <select name="texte" id="text">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XAF</option>
            </select>
            <input type="number" id="enter" className="input" placeholder=""></input>
            <select name="texte" id="text">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XAF</option>
            </select>
            <button className="btn">Exchange</button>
        </div>
        <div className="deposit">
            <h2>Deposit</h2>
            <select name="texte" id="text">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XAF</option>
            </select>
            <input type="number" id="enter" className="input" placeholder=""></input>
            <button className="btn">Deposit</button>
        </div>
        <div className="total">
        <h2>Total Balance</h2>
        <p>0.00 XAF</p>
        </div>
        <div className="default">
            <h2>Default Balance</h2>
            <p>Default Currency:<select name="texte" id="text">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XAF</option>
            </select></p>
            
        </div>
        </div>
      l</>
    )
}