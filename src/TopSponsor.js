import React, { Component } from 'react';
import { toast } from 'react-toastify';
import back from "./assets/bg10.jpg"
import getBlockchain from './ethereum.js'; 
import TopSponsor2 from "./TopSponsor2";  
 
toast.configure();

class TopSponsor extends Component {

    async componentDidMount() {

         await this.loadBlockChainData();

    }
 
    loadBlockChainData = async () => {

        // Global Stats
        const sunny = 10**6;

        let { contractInstance } = await getBlockchain();
        let pool_balance = await contractInstance.pool_balance();
        this.setState({ pool_balance : (Number(pool_balance)/10**6) });   
        this.setState({ topShare : Number( this.state.pool_balance/10).toFixed(4)   });   
        this.setState({ topShare1 : Number( this.state.topShare*40/100).toFixed(4)   });   
        this.setState({ topShare2 : Number( this.state.topShare*20/100).toFixed(4)   });   
        this.setState({ topShare3 : Number( this.state.topShare*15/100).toFixed(4)   });   
        this.setState({ topShare4 : Number( this.state.topShare*15/100).toFixed(4)   });   
        this.setState({ topShare5 : Number( this.state.topShare*10/100).toFixed(4)   });   
 
        // this.setState({ topShareUSD1 : Number(this.state.topShare1*this.props.prmPrice).toFixed(4)   });   
        // this.setState({ topShareUSD2 : Number(this.state.topShare2*this.props.prmPrice).toFixed(4)   });   
        // this.setState({ topShareUSD3 : Number(this.state.topShare3*this.props.prmPrice).toFixed(4)   });   
        // this.setState({ topShareUSD4 : Number(this.state.topShare4*this.props.prmPrice).toFixed(4)   });   
        // this.setState({ topShareUSD5 : Number(this.state.topShare5*this.props.prmPrice).toFixed(4)   }); 
 
        const poolTopInfo = await contractInstance.poolTopInfo() ;
        var addrs1, addrs2, addrs3, addrs4, addrs5, deps1, deps2, deps3, deps4, deps5;

        addrs1 = poolTopInfo.addrs[0];
        deps1 = Number(poolTopInfo.deps[0]) / sunny;

        // console.log('pool top info' + addrs1);

        this.setState({ deps1 });
        this.setState({ addrs1 });
        let subAddrs1 = this.state.addrs1.toString();
        let subAddress1 = subAddrs1.substring(0, 8);
        this.setState({ subAddress1 });
    //    console.log('deps1 ' + this.state.deps1 + ' ' + this.state.subAddress1)
        // console.log(this.state.addrs1 + "----" + this.state.subAddress1)

        addrs2 = poolTopInfo.addrs[1];
        deps2 = Number(poolTopInfo.deps[1]) / sunny;
        this.setState({ deps2 });
        this.setState({ addrs2 });
        let subAddrs2 = this.state.addrs2.toString();
        let subAddress2 = subAddrs2.substring(0, 8);
        this.setState({ subAddress2 });
    //    console.log('deps2 ' + this.state.deps2 + ' ' + this.state.subAddress2)

        addrs3 = poolTopInfo.addrs[2];
        deps3 = Number(poolTopInfo.deps[2]) / sunny;
        this.setState({ deps3 });
        this.setState({ addrs3 });
        let subAddrs3 = this.state.addrs3.toString();
        let subAddress3 = subAddrs3.substring(0, 8);
        this.setState({ subAddress3 });
    //    console.log('deps3 ' + this.state.deps3 + ' ' + this.state.subAddress3)

        addrs4 = poolTopInfo.addrs[3];
        deps4 = Number(poolTopInfo.deps[3]) / sunny;
        this.setState({ deps4 });
        this.setState({ addrs4 });
        let subAddrs4 = this.state.addrs4.toString();
        let subAddress4 = subAddrs4.substring(0, 8);
        this.setState({ subAddress4 });
    //    console.log('deps4 ' + this.state.deps4 + ' ' + this.state.subAddress4)

        addrs5 = poolTopInfo.addrs[4];
        deps5 = Number(poolTopInfo.deps[4]) / sunny;
        // console.log(addrs5 + '- dep ' + deps5);
        this.setState({ deps5 });
        this.setState({ addrs5 });
        let subAddrs5 = this.state.addrs5.toString();
        let subAddress5 = subAddrs5.substring(0, 8);
        this.setState({ subAddress5 });
    //    console.log('deps5 ' + this.state.deps5 + ' ' + this.state.subAddress5) 

    }

    constructor(props) {
        super(props)

        this.state = {
            deps1: 0,
            deps2: 0,
            deps3: 0,
            deps4: 0,
            deps5: 0,
            subAddress1: "",
            subAddress2: "",
            subAddress3: "",
            subAddress4: "",
            subAddress5: "",
        }
    }


    render() {

        const backStyle = {
            backgroundImage: `url(${back})`, backgroundAttachment: "fixed", fontFamily: "MyFont"
            , height: "auto", width: "100%", margin: "0", backgroundPosition: "center", overflow: "hidden", backgroundRepeat: "no-repeat", backgroundSize: "cover"
        };

        // backgroundImage: `url(${back})`, backgroundColor: "blue",
        return (
            <div>

                <div style={backStyle}>
                    <hr />
                    <hr />
                    {/* <div style={{ textAlign: "center" }}>
                        <a href={url} >  <img src={require("./assets/logo.png")} alt="Logo" width="260px" /></a>
                    </div> */}
                    <TopSponsor2
                        
                        topShare1={this.state.topShare1}
                        topShare2={this.state.topShare2}
                        topShare3={this.state.topShare3}
                        topShare4={this.state.topShare4}
                        topShare5={this.state.topShare5}

                        // topShareUSD1={this.state.topShareUSD1}
                        // topShareUSD2={this.state.topShareUSD2}
                        // topShareUSD3={this.state.topShareUSD3}
                        // topShareUSD4={this.state.topShareUSD4}
                        // topShareUSD5={this.state.topShareUSD5}
                        deps1={this.state.deps1}
                        subAddress1={this.state.subAddress1}
                        deps2={this.state.deps2}
                        subAddress2={this.state.subAddress2}
                        deps3={this.state.deps3}
                        subAddress3={this.state.subAddress3}
                        deps4={this.state.deps4}
                        subAddress4={this.state.subAddress4}
                        deps5={this.state.deps5}
                        subAddress5={this.state.subAddress5}
                    />

                    <div style={{ paddingBottom: "50px" }}></div>
                </div>

            </div >
        );
    }
}
export default TopSponsor;
