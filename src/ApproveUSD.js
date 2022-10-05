import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
// import { ethers } from 'ethers'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure(); 

export class ApproveUSD extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0, 
            contractAddress: '0x3357af4613E6478d70074C8a6D4DFd572d955712'
        }
        
        this.button100 = this.button100.bind(this); 
        this.button20000 = this.button20000.bind(this); 
        this.button50000 = this.button50000.bind(this); 
        this.button500 = this.button500.bind(this);
        this.button1000 = this.button1000.bind(this);
        this.button100000 = this.button100000.bind(this);
        this.button5000 = this.button5000.bind(this);
        this.firstAllowance = this.firstAllowance.bind(this);
        this.nextAllowance = this.nextAllowance.bind(this);
        this.reset = this.reset.bind(this); 
    }

    async firstAllowance(spender, amount) {
        const { tokenInstance } = await getBlockchain();

        if (amount >= 25) {
             
            let amt = Number(amount).toFixed();
            amt = amt + "000000";
            console.log(typeof amt ); 

            // // let amt1 = amt.toLocaleString();
            // // console.log( amt1 ); 
            // // amt = amt.toLocaleString('fullwide', {useGrouping:false})
            // // console.log( amt); 

            // const myNumb = 1000000000;
            // console.log( myNumb ); // 1e+21
            // console.log( myNumb.toLocaleString() );
            // console.log( myNumb.toLocaleString('fullwide', {useGrouping:false}) );
            // amt = amt.toString();
            // console.log( amt); 
            // amt= amt.toString(); 
            // let amt2 = "10000";
            
            // console.log( typeof amt2)

            await tokenInstance
                .approve(spender, amt)
                .then(res => toast.success(amount + ' PRM approval processing, Please wait do not refresh', { position: toast.POSITION.TOP_RIGHT, autoClose: 20000 })

                ).then(res => {
                    setInterval(() => {
                        window.location.reload();
                    }, 20000);
                }).catch(err => toast.error(err + " Unknown Error (first) "));
        } else {
            toast.info('Minimum approval allowed is 500 PRM');
        } 
    }

    async nextAllowance(spender, amount) {
        const { usdtInstance } = await getBlockchain();

        if (amount >= 25) {
            let amt = Number(amount).toFixed();
            amt = amt + "000000";
            console.log(typeof amt ); 

            await usdtInstance
                .increaseAllowance(spender, amt )
                .then(res => toast.success(amount + ' PRM approval processing, Please wait do not refresh', { position: toast.POSITION.TOP_RIGHT, autoClose: 20000 })) 
                .then(res => {
                    setInterval(() => {
                        window.location.reload();
                    }, 20000);
                })
                .catch(err => toast.error(err + " Unknown Error (next)"));
        } else {
            toast.info('Minimum approval allowed is 500 PRM');
        } 
    } 

    button50000(event) {
        this.setState({ count: this.state.count + 50000 });
    }

    button500(event) {
        this.setState({ count: this.state.count + 500 });
    }

    button1000(event) {
        this.setState({ count: this.state.count + 1000 });
    }

    button5000(event) {
        this.setState({ count: this.state.count + 5000 });
    }

    button20000(event) {
        this.setState({ count: this.state.count + 20000 });
    }

    button100(event) {
        this.setState({ count: this.state.count + 100 });
    } 

    button100000(event) {
        this.setState({ count: this.state.count + 100000 });
    }
 

    reset(event) {
        this.setState({ count: 0 });
    }

    render() {

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const addButton = {
            display: "inline-block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "#eee97f",
            transition: ".4s", marginTop: "10px", marginLeft: "10px", marginBottom: "10px", fontWeight: "3px", border: "3px solid white", backgroundColor: "black"
        }

        const firstAllowanceButton = {
            display: "inline-block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "center", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px" 
        };

        return (
            <div style={{ paddingTop: "60px" }} >
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}> 

                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px", fontFamily: "MyFont" }}>
                           Approve PRM</div>
                        <br />
                        <form
                            onSubmit={(event) => {

                                event.preventDefault();

                                const spender = this.state.contractAddress;
                                const amount = this.state.count;
                                const tokenApproved = this.props.tokenApproved;
                                const tokenBal = this.props.tokenBal;
                                if(amount <= tokenBal){
                                    if (amount >= 500 && tokenApproved === 0) {
                                        this.firstAllowance(spender, amount); 
                                    } else if (amount >= 500 ) {
                                        this.nextAllowance(spender, amount); 
                                    } else {
                                        toast.error("Min deposit is 500 PRM");
                                    } 
                                } else {
                                    toast.error("Approvable balance should be less than available balance");
                                }
                               
                            }}

                        >    
                        <label style={{color: "#eee97f"}}>Enter Amount (in PRM) </label>
                        <input type="text" style={{ backgroundColor: "black", borderRadius: "2px", height: "50px", color: "#eee97f", fontSize: "25px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} value={this.state.count} /> <br /><br />


                        <a href="#100" className="btn btn-primary" style={addButton} onClick={this.button100}>+100</a> 
                        <a href="#500" className="btn btn-primary" style={addButton} onClick={this.button500}>+500</a> 
                        <a href="#1000" className="btn btn-primary" style={addButton} onClick={this.button1000}>+1000</a> 
                        <a href="#5000" className="btn btn-primary" style={addButton} onClick={this.button5000}>+5000</a>  
                        <a href="#20000" className="btn btn-primary" style={addButton} onClick={this.button20000}>+20000</a> 
                        <a href="#50000" className="btn btn-primary" style={addButton} onClick={this.button50000}>+50000</a> 
                        <a href="#100000" className="btn btn-primary" style={addButton} onClick={this.button100000}>+100000</a>
                        <a href="#reset" className="btn btn-primary" style={addButton} onClick={this.reset}>Reset</a>
                        <br />

                        <br />

                        {/* <p style={{ color: "#eee97f", textAlign: "center", fontSize: "22px" }}>Your token Balance : {this.props.tokenBal} tokens</p> */}
                        <p style={{ color: "#eee97f", textAlign: "center", fontSize: "14px" }}>Your PRM Balance : {this.props.tokenBal} PRM</p>
                         
                        <p style={{ color: "#eee97f", textAlign: "center", fontSize: "14px" }}>Approved : {this.props.tokenApproved}  </p>
                          
 
                        <div style={{ textAlign: "center" }}>
                            <button type="submit" className="btn btn-success" style={firstAllowanceButton}>Approve PRM</button> 
                        </div>
                        </form> 

                    </div>

                    <div className="col-xl-4"></div>
                </div>

            </div>
        )
    }
}

export default ApproveUSD;
