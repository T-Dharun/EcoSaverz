import Watt from './watt.js';
function Target({target}) {
    return (
        <>
            <div className="Target">
                <div className="a1">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                        </svg>
                    </div>
                    <div>ELECTRICITY TARGET (UNITS)</div>
                </div>
                <div className="a2">{target}1000</div>
            </div>
            <Watt/>
            <div className="t1 ">
                <div className="l1">
                    <div>Consumed ( Units )</div>
                    <div>12.5 KWh</div>
                </div>
                <div className="l1">
                    <div>Remaining ( Units ) </div>
                    <div>987.2 KWh</div>
                </div>
                <div className="l1">
                    <div>Amount ( Rupees ) </div>
                    <div>&#8377; 12.78</div>
                </div>
            </div>
            <div className="Target">
                <div className=" b1">578</div>
                <div className="b2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                            <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                        </svg>
                    </div>
                    <div className="p-2">WATER TARGET (Ltr)</div>
                </div>

            </div>
            <div className="t1 t2">
                <div className="l1">
                    <div>Consumed ( Ltr )</div>
                    <div>12.5 Ltr</div>
                </div>
                <div className="l1">
                    <div>Remaining ( Ltr )</div>
                    <div>987.2 Ltr</div>
                </div>
                <div className="l1">
                    <div>Amount ( Rupees ) </div>
                    <div>&#8377; 87.87</div>
                </div>
            </div>
            <div className="time">
                Time Left : 1.23.23
            </div>
        </>
    );
}
export default Target;