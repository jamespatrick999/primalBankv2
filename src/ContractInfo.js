import React, { Component } from 'react' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();
const bscUrl = "https://bscscan.com/address/0x3357af4613e6478d70074c8a6d4dfd572d955712#code";
export class ContractInfo extends Component {
 
    render(){

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const headerStyle ={ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" };
        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={headerStyle}>
                            Smart Contract</div>
                        <br />

                        <div className="col-xl-12" style={{ textAlign: "center" }}>
           
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract Address</p>
                            <a href={bscUrl} style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}>  0x3357af4613E6478d70074C8a6D4DFd572d955712</a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract PRM Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.contractBal } PRM </a>
                            <br /><br />
                             
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Stake </p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.total_staked } PRM     </a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Withdrawn</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.total_withdraw } PRM </a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Users</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> # {this.props.total_users }  </a>
                            <br /><br />
                             
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Pool Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.pool_balance } PRM  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>No. of Pool Cycles</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}># {this.props.pool_cycle }    </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Next Draw (Top Sponsor)</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.draw_hrs }h : {this.props.draw_mins }m : {this.props.draw_secs }s</a>
                            <br /><br />

                            
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default ContractInfo
