import React, { Component } from 'react'; 
import ApproveUSD from './ApproveUSD.js';
import ContractInfo from './ContractInfo.js';
import Price from './Price.js';
import UserInfo from './UserInfo.js';
import getBlockchain from './ethereum.js';
import Invest from './Invest.js';
import TopSponsor from './TopSponsor.js';
import back from "./assets/bg10.jpg" 
import logo from "./assets/logov2.png" 
import ReferralLink from './ReferralLink.js';
import Withdraw from './Withdraw.js';
import "./css/style.css";  

class TopPage extends Component { 

   componentDidMount = async() => {

        await this.loadBlockChainData();  
        let priceURL = "https://api.pancakeswap.info/api/v2/tokens/0x2668BAbeAB11780c516B1d3aD02011668AFF8aa0";
        let obj = await (await fetch(priceURL)).json();
        this.setState({prmPrice:Number(obj.data.price).toFixed(4)})

        this.timerData();   
         
   } 

   timerData = async () => {
    let { contractInstance } = await getBlockchain();

    
    // console.log(this.state.prmPrice)
        let contractInfo = await contractInstance.contractInfo(); 
        this.setState({ pool_last_draw : (Number(contractInfo._pool_last_draw)) });
  
        console.log(this.state.pool_last_draw)

       const time_step = await contractInstance.time_period();
       this.setState({ time_step: Number(time_step) });

       const now = await contractInstance.getNow();
       this.setState({ now: Number(now) });
       
        var draw_hrs = 0;
        var draw_mins = 0;
        var draw_secs = 0;

        var next_draw_time = Number(this.state.pool_last_draw + this.state.time_step - this.state.now);
        if (next_draw_time < 0) {
            next_draw_time = 0;
        }
        if (next_draw_time > 3600) {
            draw_hrs = Math.floor(next_draw_time / 3600);
            draw_mins = Math.floor((next_draw_time % 3600) / 60);
            draw_secs = Math.floor(next_draw_time % 60);
        } else if (next_draw_time > 60) {
            draw_mins = Math.floor(next_draw_time / 60);
            draw_secs = Math.floor(next_draw_time % 60);

        } else {
            draw_secs = next_draw_time;
        }

        this.setState({ draw_hrs });
        this.setState({ draw_mins });
        this.setState({ draw_secs }); 
       
    }     

   loadBlockChainData = async () => {

       let { tokenInstance, currentAcc, tokenAddress, contractInstance, contractAddress } = await getBlockchain();
       this.setState({currentAcc});
       this.setState({tokenAddress});
       
       let symbol  = await tokenInstance.symbol() ;
       this.setState({ symbol });

       let tokenDecimals  = await tokenInstance.decimals() ;
       this.setState({ tokenDecimals : Number(tokenDecimals) });
    //    console.log('tokendecimals '+tokenDecimals)

       let tokenApproved  = await tokenInstance.allowance(currentAcc, contractAddress) ;
       this.setState({ tokenApproved : Number(tokenApproved)/10**(this.state.tokenDecimals) });
    //    console.log('tokenApproved '+tokenApproved) 

       let tokenBal  = await tokenInstance.balanceOf(currentAcc) ;
       this.setState({ tokenBal : (Number(tokenBal)/10**(this.state.tokenDecimals)) });   
    //    console.log('tokenbal '+this.state.tokenBal) 

       let contractBal  = await tokenInstance.balanceOf(contractAddress) ;
       this.setState({ contractBal : (Number(contractBal)/10**(this.state.tokenDecimals)) });   
    //    console.log('tokenbal '+this.state.contractBal) 

       let contractRTBal  = await tokenInstance.balanceOf(contractAddress) ;
       this.setState({ contractRTBal : (Number(contractRTBal)/10**(this.state.tokenDecimals)) }); 
    //    console.log('tokenApproved '+tokenApproved) 

       // Contract Instance

       let ownerAddress  = await contractInstance.owner() ;
       this.setState({ ownerAddress });
    //   console.log('owner ' + ownerAddress); 

        if (this.props.refLinkid) {
            this.setState({ refid: this.props.refLinkid });

        } else {
            this.setState({ refid: this.state.ownerAddress });
        }
        //  console.log('refid- '+this.state.refid);

    //    let rtPrice = await contractInstance.getRTPrice();
    //    this.setState({ rtPrice : (Number(rtPrice)/10**(this.state.tokenDecimals)) });   

       let pool_balance = await contractInstance.pool_balance();
       this.setState({ pool_balance : (Number(pool_balance)/10**(this.state.tokenDecimals)) });   
       this.setState({ topShare : this.state.pool_balance/10   });   
       this.setState({ topShare1 : this.state.topShare*40/100   });   
       this.setState({ topShare2 : this.state.topShare*20/100   });   
       this.setState({ topShare3 : this.state.topShare*15/100   });   
       this.setState({ topShare4 : this.state.topShare*15/100   });   
       this.setState({ topShare5 : this.state.topShare*10/100   });   

       this.setState({ topShareUSD1 : (this.state.topShare*this.state.prmPrice).toFixed(4)   });   
       this.setState({ topShareUSD2 : (this.state.topShare*this.state.prmPrice).toFixed(4)   });   
       this.setState({ topShareUSD3 : (this.state.topShare*this.state.prmPrice).toFixed(4)   });   
       this.setState({ topShareUSD4 : (this.state.topShare*this.state.prmPrice).toFixed(4)   });   
       this.setState({ topShareUSD5 : (this.state.topShare*this.state.prmPrice).toFixed(4)   }); 


       let pool_cycle = await contractInstance.pool_cycle();
       this.setState({ pool_cycle : (Number(pool_cycle)) });   

       let pool_bonus = await contractInstance.poolBonus(this.state.currentAcc);
       this.setState({ pool_bonus : (Number(pool_bonus)/10**(this.state.tokenDecimals)) });   

       let avlBalance = await contractInstance.getUserBalance(this.state.currentAcc);
       this.setState({ avlBalance : (Number(avlBalance)/10**(this.state.tokenDecimals)) });    

       let contractInfo = await contractInstance.contractInfo();
       this.setState({ total_staked : (Number(contractInfo._total_staked)/10**(this.state.tokenDecimals)) });
       this.setState({ total_withdraw : (Number(contractInfo._total_withdraw)/10**(this.state.tokenDecimals)) });
       this.setState({ total_users : (Number(contractInfo._total_users)) });
       this.setState({ pool_lider : (Number(contractInfo._pool_lider)/10**(this.state.tokenDecimals)) }); 

       let userInfo = await contractInstance.userInfo(this.state.currentAcc);
       this.setState({ upline : userInfo.upline });
       this.setState({ stake_amount : (Number(userInfo.stake_amount)/10**(this.state.tokenDecimals)) });
       this.setState({ payouts : (Number(userInfo.payouts)/10**(this.state.tokenDecimals)) });
       this.setState({ instant_bonus : (Number(userInfo.instant_bonus)/10**(this.state.tokenDecimals)) });
       this.setState({ gen_bonus : (Number(userInfo.gen_bonus)/10**(this.state.tokenDecimals)) }); 
       this.setState({ user_status : userInfo.user_status  }); 
    //    console.log(this.state.user_status) 

       let userInfo2 = await contractInstance.userInfoTotals(this.state.currentAcc);
    //    console.log(userInfo2)
       this.setState({ referrals : Number(userInfo2.referrals) });
       this.setState({ total_stakes : (Number(userInfo2.total_stakes)/10**(this.state.tokenDecimals)) });
       this.setState({ total_payouts : (Number(userInfo2.total_payouts)/10**(this.state.tokenDecimals)) });
       this.setState({ team_biz : (Number(userInfo2.team_biz)/10**(this.state.tokenDecimals)) });
       this.setState({ total_structure :  Number(userInfo2.total_structure) }); 
       this.setState({ staked_payouts : (Number(userInfo2.staked_payouts)/10**(this.state.tokenDecimals)) });  
       
        
   }

   constructor(props) {
    super(props)

    this.state = {
         symbol :'',
         prmPrice: '... ', 
        } 
    }

   render() {                   
    const backStyle = {
        backgroundImage: `url(${back})`, backgroundAttachment: "fixed", fontFamily: "MyFont", height: "auto", width: "100%", margin: "0", backgroundPosition: "center", overflow: "hidden", backgroundRepeat: "no-repeat", backgroundSize: "cover"
    };
    return (
        <div style={backStyle } >
                <div style={{ textAlign: "center" , paddingTop: "40px" }}>
                    <img src={logo} alt=""  width="320" />  
                </div>
                <Price
                    prmPrice = {this.state.prmPrice}  
                />
                
                {
                    this.state.tokenApproved >= 500 && this.state.user_status === false ?
                    
                    <Invest 
                        tokenBal = {this.state.tokenBal} 
                        refid = {this.state.refid} 
                        prmPrice = {this.state.prmPrice}  
                        tokenApproved = {this.state.tokenApproved} 
                    /> :
                    null
                    
                }
                 
                {
                    this.state.tokenApproved < 500  && this.state.user_status === false ?
                    
                    <ApproveUSD 
                        prmPrice = {this.state.prmPrice} 
                        tokenBal = {this.state.tokenBal}  
                        tokenApproved = {this.state.tokenApproved} 
                    />  :
                    null
                    
                }
                <ContractInfo 
                    total_staked = {this.state.total_staked}  
                    total_withdraw = {this.state.total_withdraw}  
                    pool_balance = {this.state.pool_balance}  
                    pool_cycle = {this.state.pool_cycle}  
                    total_users = {this.state.total_users } 
                    contractBal = {this.state.contractBal } 
                    next_draw_time={this.state.next_draw_time}
                    draw_hrs={this.state.draw_hrs}
                    draw_mins={this.state.draw_mins}
                    draw_secs={this.state.draw_secs}
                />     
                {
                    this.state.user_status === true ?
                    
                <UserInfo 
                    upline =        {this.state.upline}   
                    instant_bonus  = {this.state.instant_bonus }
                    pool_bonus        = {this.state.pool_bonus }
                    gen_bonus   = {this.state.gen_bonus } 
                    referrals   = {this.state.referrals } 
                    total_stakes   = {this.state.total_stakes } 
                    total_payouts   = {this.state.total_payouts } 
                    team_biz   = {this.state.team_biz } 
                    total_structure   = {this.state.total_structure } 
                    staked_payouts   = {this.state.staked_payouts } 
                /> : null }
                 {
                    this.state.user_status === true ?
                 
                <Withdraw
                    avlBalance = {this.state.avlBalance}
                />: null }
                {
                    this.state.user_status === true ?
                 
                <ReferralLink
                    currentAcc = {this.state.currentAcc}
                />: null }
                {
                    this.state.user_status === true ?
                 
                <TopSponsor
                    prmPrice   = {this.state.prmPrice } 

                />: null }

                    
                
                <div style={{ paddingBottom: "20px" }}></div>

                <div style={{ paddingBottom: "510px" }}></div> 
            </div>
    )}

}
export default TopPage;