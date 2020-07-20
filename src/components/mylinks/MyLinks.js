import React from 'react';

const MyLinks = (props) => {
    return (
        <div className="my-links">
            <ul>
                <li className="links">
                    <a href="https://robinhood.com/" rel="noopener noreferrer" target="_blank">Robinhood</a>
                </li>
                <li className="links">
                    <a href="https://www.webull.com/quote" rel="noopener noreferrer" target="_blank">WeBull</a>
                </li>
                <li className="links">
                    <a href="https://www.marketwatch.com/" rel="noopener noreferrer" target="_blank">MarketWatch</a>
                </li>
                <li className="links">
                    <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">TradingView</a>
                </li>
                <li className="links">
                    <a href="https://seekingalpha.com/account/portfolio/summary/" rel="noopener noreferrer" target="_blank">Seeking Alpha Portfolio</a>
                </li>
                <li className="links">
                    <a href="https://www.reddit.com/r/wallstreetbets/" rel="noopener noreferrer" target="_blank">WallStreetBets</a>
                </li>
                <li className="links">
                    <a href="https://www.optionsprofitcalculator.com/" rel="noopener noreferrer" target="_blank">Options Calculator</a>
                </li>
            </ul>
        </div>
    )
}
export default MyLinks;