import React, { useEffect, useState,useContext } from 'react';
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
import {useData} from './hooks/index';

export default function App({route,navigation}) {
    console.log(route.params);
    const {writeReview} = useData();
    const [Review, setReview] = useState('');
    const Movie =route.params;
    // const Movie = { "Actors": "Wesley Snipes, Stephen Dorff, Kris Kristofferson", "Awards": "5 wins & 11 nominations", 
    // "BoxOffice": "$70,087,718", "Country": "United States", "DVD": "09 Nov 2004", "Director": "Stephen Norrington",
    //  "Genre": "Action, Horror, Sci-Fi", "Language": "English, Russian, Serbian", "Metascore": "47",
    //   "Plot": "A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.", 
    //   "Poster": "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg", 
    //   "Production": "N/A", "Rated": "R", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.1/10" }, { "Source": "Rotten Tomatoes", "Value": "57%" },
    //    { "Source": "Metacritic", "Value": "47/100" }], "Released": "21 Aug 1998", "Response": "True", "Runtime": "120 min",
    //     "Title": "Blade", "Type": "movie", "Website": "N/A", "Writer": "David S. Goyer", "Year": "1998", "imdbID": "tt0120611", "imdbRating": "7.1", "imdbVotes": "276,528" }
    
    return (
        <View style={styles.body}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Movie:{Movie.Title}</Text>
            <TextInput
                multiline={true}
                numberOfLines={15}
                style={styles.textinp}
                onChangeText={setReview}
                placeholder="Movie Name"></TextInput>
            <Button onPress={() => {
                writeReview({Review,Movie});
                alert("Thanks for review");
                navigation.push('tabs');
            }} title="Save"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {

        flex: 1,
        justifyContent: 'center',
        margin: 20
        // alignItems: 'center'
    },
    text: {
        color: 'white',
    },
    textinp: {
        borderWidth: 5,
        borderColor: 'red',
        // padding: 10,
        backgroundColor: 'white',
    },

});
