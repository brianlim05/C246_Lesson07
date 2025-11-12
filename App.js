import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Exercise2 = () => {
    return (
        <View>

            <View style={styles.greenBox}>
                <Text style={[styles.title, styles.boxText]}>Who We Are</Text>
            </View>


            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>


            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
        </View>
    );
};

const Exercise3A = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, styles.boxText, { backgroundColor: "powderblue"}]}>
                <Text>Child One</Text>
            </View>

            <View style={[styles.child, styles.boxText, { backgroundColor: "skyblue" }]}>
                <Text>Child Two</Text>
            </View>

            <View style={[styles.child, styles.boxText, { backgroundColor: "steelblue" }]}>
                <Text>Child Three</Text>
            </View>
        </View>
    );
};


const Exercise3B = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { flex:4, backgroundColor: "powderblue" }]}>
                <Text  style={styles.boxText}>Child One</Text>
            </View>

            <View style={[styles.child, { flex:4, backgroundColor: "skyblue" }]}>
                <Text style={styles.boxText}>Child Two</Text>
            </View>

            <View style={[styles.child, {flex:4,backgroundColor: "steelblue"}]}>
                <Text style={styles.boxText}>Child Three</Text>
            </View>
        </View>
    );
};

const Exercise3C = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { flex:4, backgroundColor: "powderblue",maxWidth:"90"  }]}>
                <Text  style={styles.boxText}>Child One</Text>
            </View>

            <View style={[styles.child, { flex:4, backgroundColor: "skyblue"}]}>
                <Text style={styles.boxText}>Child Two</Text>
            </View>

            <View style={[styles.child, {flex:4,backgroundColor: "steelblue",maxHeight:"120"}]}>
                <Text style={styles.boxText}>Child Three</Text>
            </View>
        </View>
    );
};

const Exercise3D = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "powderblue", flex: 1 }]}>
                <Text style={styles.text}>Child One</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "skyblue", flex: 2 }]}>
                <Text style={styles.text}>Child Two</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "steelblue", flex: 3 }]}>
                <Text style={styles.text}>Child Three</Text>
            </View>
        </View>
    );
};

const Exercise3E = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "powderblue" }]}>
                <Text>Child One</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "skyblue" }]}>
                <Text>Child Two</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "steelblue" }]}>
                <Text>Child Three</Text>
            </View>
        </View>
    );
};

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "lightblue",justifyContent: "center",alignItems:"center" }]}>
                <Text>Square 1</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "lightgreen",justifyContent: "center",alignItems:"center" }]}>
                <Text >Square 2</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "red", justifyContent: "center",alignItems:"center" }]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: "green",
        borderWidth: 1,
        borderColor: "black",
    },

    boxText: {
        textAlign: "center",
        color: "white",
    },

    title: {
        fontWeight: "bold",
    },

    // parent: {
    //     flexDirection:"column",
    //     backgroundColor: '#F5fcff',
    //     borderColor: '#0099AA',
    //     borderWidth:5,
    //     // justifyContent: "flex-start",
    //     // justifyContent: "flex-end",
    //     // justifyContent: "center",
    //     // justifyContent: "space-between",
    //     // justifyContent: "space-around",
    //     // justifyContent: "space-evenly",
    //     flex:1,
    //
    // },
    //
    // Child: {
    //     borderWidth: 2,
    //     textAlign: "center",
    //     fontSize: 24,
    //     flex:1,
    // }
    parent: {
        backgroundColor: "whiteSmoke",
        marginTop:30,
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    child:  {
        width:80,
        height:80,
    }

});
