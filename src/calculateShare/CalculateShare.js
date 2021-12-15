import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';
import calShreStyle from './CalShare';

const { width, height } = Dimensions.get("screen")


const shareList = [{ shareName: "L&T", buy: "100", sell: "112" },
{ shareName: "NHPC", buy: "25.60", sell: "28.80" },
{ shareName: "SBICard", buy: "80.00", sell: "85.40" },
{ shareName: "Appollo", buy: "250.00", sell: "195.00" },
{ shareName: "Edelweiss", buy: "290.24", sell: "62.80" },
{ shareName: "ITC", buy: "153.95", sell: "244.94" },
{ shareName: "TCS", buy: "456.00", sell: "561.00" },
{ shareName: "CEAT", buy: "200.00", sell: "205.44" },
{ shareName: "HDFCBank", buy: "806.00", sell: "1008.50" },
{ shareName: "PowerGrid", buy: "190.00", sell: "565.45" },
{ shareName: "AXISBank", buy: "30.50", sell: "80.54" },
{ shareName: "BajajFinsv", buy: "31.60", sell: "81.65" },
{ shareName: "CIPLA", buy: "140.00", sell: "157.45" },
{ shareName: "EKC", buy: "80.50", sell: "88.50" },
{ shareName: "EMCO", buy: "25.60", sell: "00.45" },
]
export default class CalculateShare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: "",
            buyShareList: [],
            highPerShare: [],
            amounttest: 500,
            resultShareData: [],
            totalInvest:"0",
            totalProfit:"0"
        };

    }



    calculateShare = async() => {
        this.setState({
            totalInvest:0,
            totalProfit:0
        })
        let sharePerData = []
        shareList.map(data => {
            let ans = data.sell - data.buy;
            let answer = ans / data.buy * 100;
            if (answer > 0) {
                sharePerData.push({ sName: data.shareName, sRate: data.buy, sPer: answer,sSell:data.sell })
            }

        })
        console.log(sharePerData)
        let sordData = sharePerData.sort((a, b) => a.sPer < b.sPer ? 1 : -1);
 

        let amounData = this.state.amount;
        let sharefinalData = []


        console.log("------",sordData.length)
        for (let index = 0; index < sordData.length; index++) {

           if (amounData >=parseFloat( sordData[index].sRate)) {
                amounData = amounData - sordData[index].sRate
                let temp = this.state.amounttest - sordData[index].sRate
                sharefinalData.push(sordData[index])

                await this.setState({
                    amounttest: temp
                })
            }
           
        }
        this.setState({
            resultShareData: sharefinalData
        })
        this.state.resultShareData.map(data=>{
            let totalInv=parseInt(this.state.totalInvest)+parseInt(data.sRate)
            let totalPro=parseInt(this.state.totalProfit)+parseInt(data.sSell)
            this.setState({
                totalInvest:totalInv,
                totalProfit:totalPro
            })
        })



    }
    shareRenderData=(data)=>{
        return(
            <View style={{width:width,height:height/20,marginTop:5,flexDirection:'row',
            justifyContent:'space-between',alignItems:'center'}}>
                <Text style={calShreStyle.listFontStyle}>
                    {data.item.sName}
                </Text>
                <Text style={calShreStyle.listFontStyle}>
                {data.item.sRate}
                </Text >
                <Text style={calShreStyle.listFontStyle}>
                {data.item.sSell}
                </Text>

            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: "100%", alignItems: 'center', }}>
                    <Text style={calShreStyle.headerText}> CalculateShare </Text>
                    <View style={calShreStyle.inputView}>
                        <View style={calShreStyle.inputContaner}>
                            <Text style={{ fontSize: width / 20 }}>
                                Amount:-
                            </Text>
                            <TextInput
                                style={calShreStyle.textInputSt}
                                onChangeText={(text) => this.setState({ amount: text })}
                                value={this.state.amount}
                                placeholder="Enter Amount"
                                keyboardType="numeric"
                                autoFocus={true}
                            />
                        </View>
                        <TouchableOpacity style={calShreStyle.buttonView}
                            onPress={() => { this.calculateShare() }}
                        >
                            <Text style={{ fontSize: width / 22, fontWeight: 'bold', color: "#000" }}>
                                Calculate
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={calShreStyle.shareListView}>
                        <FlatList
                        data={this.state.resultShareData}
                        renderItem={(item)=>this.shareRenderData(item)}
                        keyExtractor={item=>item.id}
                        />

                    </View>
                    <View style={calShreStyle.totalView}>
                       <Text style={{fontSize:width/22}}>
                           Total Invest:-{this.state.totalInvest}
                           </Text> 
                           <Text style={{fontSize:width/22}}>
                               Total Profit :-{this.state.totalProfit}
                           </Text>

                    </View>


                </View>


            </View>
        );
    }
}
