import { StyleSheet, View, Text, FlatList, SafeAreaView, StatusBar, Image } from "react-native";
import colors from "../constants/colors";
import { PROFILE_IMAGE_SIZE } from "../constants/sizes"

const Avatar = ({ author, avatar, size }) => {
    const sizeStyle = {
        width: size || PROFILE_IMAGE_SIZE,
        height: size || PROFILE_IMAGE_SIZE,
        borderRadius: size || PROFILE_IMAGE_SIZE
    };

    if(avatar === undefined){
        return <View style={[sizeStyle, styles.textView]}>
            <Text style={styles.text}>{author[0]}</Text>
        </View>
    } else {
        return <Image style={[sizeStyle, styles.image]} source={{uri: avatar}} />
    }
}

const styles = StyleSheet.create({
    image: {
    },

    

    textView: {
        backgroundColor: colors.brandPrimary,
    },

    text: {
        color: colors.white,
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        width: "100%",
        fontWeight: "900",
        fontSize: 24
    }
});

export default Avatar;