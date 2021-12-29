import { StyleSheet } from 'react-native';

export const mainPage = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363636',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerTitle: {
        fontSize: 26,
        color: 'black'
    },
    btn: {
        width: 250,
        height: 75,
        marginTop: 20,
        backgroundColor: "red",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    btnText: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center",
        color: "#ffffff"
    },
    action: {
        marginTop: 10
    },
    modalContainer: {
        width: 310,
        height: 310,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    line: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#363636'
    },
    modelTime: {
        flexDirection: 'row'
    },
    separetedSymbol: {
        textAlignVertical: 'center'
    }
});
