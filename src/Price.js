import React, { Component } from 'react'  

class Withdraw extends Component { 

    render() {

        const colStyle = {
            backgroundImage: "radial-gradient(black, #131050 )", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee"
        };
 

        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}>

                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" }}>
                            PRM Price</div>
                        <br />


                        <div style={{ color: "white", fontSize: "29px", fontFamily: "MyFont", textAlign: "center" }}> {this.props.prmPrice} USDT</div>
                        {/* <br />
                        <p style={{ textAlign: "center", color: "grey" }}> Requires gas fee
                        </p> */}


                       <br/>


                    </div>
                    <div className="col-xl-4"></div>

                </div>
                <div style={{ paddingBottom: "20px" }}></div>
            </div >

        )
    }
}

export default Withdraw
