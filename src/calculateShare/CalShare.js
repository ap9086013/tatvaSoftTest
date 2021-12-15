import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen")

const calShreStyle = StyleSheet.create({

    mainView: {
        flex: 1,
    },
    headerText: {
        fontSize: width / 15,
        color: '#000',
        fontWeight: 'bold'
    },
    textInputSt: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    totalView: {
        marginTop: '8%',
        width: '100%',
        height: '20%',
        alignItems: 'center'
    },

    shareListView: {
        width: "100%",
        height: '40%',
        marginTop: '5%'
    },

    inputView: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContaner: {
        width: '95%',
        height: '50%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center"
    },

    buttonView: {
        width: '60%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d7d7d7',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        marginTop: '5%'
    },
    listFontStyle:{
        fontSize:width/23
    }

})
export default calShreStyle;