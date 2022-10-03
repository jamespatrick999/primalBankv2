import React, { Component } from 'react'

import 'react-toastify/dist/ReactToastify.css';
 
class TopSponsor2 extends Component {
     
    render() {

        const colStyle = {
            backgroundImage: "linear-gradient(to right, #131050, black)", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",
        };


        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" }}>
                            Top Sponsor Stats</div>
                        <br />

                        <div className="col-xl-12" >

                            <p style={{ color: "#eee97f", fontSize: "17px", float: "left" }}>
                                1. {this.props.deps1 > 0 ? this.props.deps1 : "..."} PRM </p>
                            <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.deps1 > 0 ? this.props.subAddress1 : null}... </p>
                                <br/>
                                <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.topShare1  } PRM
                                 {/* <span style={{color:"white"}}>({this.props.topShare1*this.state.prmPrice } USDT)</span>  */}
                                </p>    

                            <br /><br />

                            <p style={{ color: "#eee97f", fontSize: "17px", float: "left" }}>
                                2. {this.props.deps2 > 0 ? this.props.deps2 : "..."} PRM </p>
                            <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.deps2 > 0 ? this.props.subAddress2 : null}... </p>
                                <br/>
                                <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.topShare2  } PRM
                                 {/* <span style={{color:"white"}}>({this.props.topShare2*this.state.prmPrice } USDT)</span>  */}
                                </p>    

                            <br /><br />
                            <p style={{ color: "#eee97f", fontSize: "17px", float: "left" }}>
                                3. {this.props.deps3 > 0 ? this.props.deps3 : "..."} PRM </p>
                            <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.deps3 > 0 ? this.props.subAddress3 : null}... </p>
                                <br/>
                                <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.topShare3  } PRM
                                 {/* <span style={{color:"white"}}>({this.props.topShare3*this.state.prmPrice } USDT)</span>  */}
                                </p>    

                            <br /><br />
                            <p style={{ color: "#eee97f", fontSize: "17px", float: "left" }}>
                                4. {this.props.deps4 > 0 ? this.props.deps4 : "..."} PRM </p>
                            <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.deps4 > 0 ? this.props.subAddress4 : null}... </p>
                                <br/>
                                <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.topShare4  } PRM
                                 {/* <span style={{color:"white"}}>({this.props.topShare4*this.state.prmPrice } USDT)</span>  */}
                                </p>    
                                
                            <br /><br />

                            <p style={{ color: "#eee97f", fontSize: "17px", float: "left" }}>
                                5. {this.props.deps5 > 0 ? this.props.deps5 : "..."} PRM </p>
                            <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.deps5 > 0 ? this.props.subAddress5 : null}... </p>
                                <br/>
                                <p style={{ color: "#eee97f", fontSize: "17px", float: "right", fontFamily: "MyFont" }}>
                                {this.props.topShare5  } PRM
                                 {/* <span style={{color:"white"}}>({this.props.topShare5*this.state.prmPrice } USDT)</span>  */}
                                </p>    

                            <br /><br />
                            {/* <p>
                                <a href="https://tronexsun.net" style={{ color: "red", textDecoration: "underline" }} >Back</a>
                            </p> */}

                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >

        )
    }
}

export default TopSponsor2
