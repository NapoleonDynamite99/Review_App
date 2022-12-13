import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Modal,
    SafeAreaView,
    Button,
    TextInput,
    Image,
} from 'react-native';
import { useData } from '../hooks/index';

const CustomCard = ({ item }) => {
    console.log(item.Movie.Title)
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{ margin: 15 }}>
                    <Text style={styles.titletext}>{item.Movie.Title}</Text>
                    <Image
                        style={{ width: 330, height: 300, }}
                        resizeMode="contain"
                        source={{ uri: item.Movie.Poster }}></Image>
                </View>

                <Text style={styles.Reviewtext}>Review</Text>
                <Text style={{padding:10}}>{item.Review}</Text>
            </View>
        </View>

    )
}

export default function App({ navigation }) {
    const { getReview } = useData();
    const [Data, setDATA] = useState({});
    useEffect(() => {
        async function fetchData() {
            const DAT = await getReview();
            console.log('------------------')
            console.log(DAT);
            console.log('------------------')
            setDATA(DAT);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={Data} renderItem={({ item, index }) => <CustomCard key={index} item={item} />}></FlatList>

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'gray',
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
    modalView: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        // padding: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        padding: 5
    },
    titletext: {
        color: 'black',
        fontSize: 20,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        textAlign: 'center',
        selfAlign: 'center'
    },
    Reviewtext:{
        color: 'black',
        fontSize: 20,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 10,
    }
})
