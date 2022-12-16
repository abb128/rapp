import { View, StyleSheet, Text, FlatList, Image, StatusBar } from "react-native";
import Avatar from "../components/Avatar";
import { SPACE_IMAGE_SIZE } from "../constants/sizes";
import Svg, { Circle, Path, Polygon, Rect, SvgUri, SvgXml } from 'react-native-svg';
import colors from "../constants/colors";


const SpaceItem = ({ title, icon }) => {
    return <View style={styles.spaceItem}>
        <Avatar author={title} avatar={icon} size={SPACE_IMAGE_SIZE} />
    </View>
}

const SpaceList = () => {
    let spaceData = [];

    for(let i=0; i<80; i++){
        spaceData.push({
            title: i.toString() + "_space",
            icon: undefined
        });
    }

    const renderItem = ({ item }) => {
        return <SpaceItem title={item.title} icon={item.icon} />
    }

    return <View style={styles.spaces}>
        <FlatList
            data={spaceData}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    </View>
}

const Channel = ({title}) => {

    return <View style={styles.channelItem}>
        <Svg width={24} height={24} style={styles.channelItemImage}>
            <Polygon fill={colors.greyInactive} points="16,12 14,12 14,14 10,14 10,10 12,10 12,8 10,8 10,3 8,3 8,8 3,8 3,10 8,10 8,14 3,14 3,16 8,16 8,21 10,21 10,16 
                14,16 14,21 16,21 16,16 21,16 21,14 16,14" />
            <Path fill={colors.greyInactive} d="M18.5,1C16,1,14,3,14,5.5s2,4.5,4.5,4.5S23,8,23,5.5S21,1,18.5,1z M17.5,7C17.5,7,17.5,7,17.5,7c-0.2-0.1-0.3-0.1-0.3-0.2
                c-0.6-0.5-1.7-1.1-1.8-2c-0.1-0.7,0.8-1.6,1.3-2c0.8-0.6,2.3-1.1,3.2-0.5c0.6,0.4-1.2,1-1.4,1.3c-0.3,0.4-0.3,0.9-0.3,1.4
                c0,0.5,0.1,1.2-0.2,1.6C17.9,6.9,17.7,7,17.5,7z M20.8,7.9c-0.4,0.3-0.9,0.2-1.3,0.5c-0.1,0.1-0.2,0.2-0.3,0.2
                c-0.2,0.1-0.5-0.1-0.5-0.3c-0.3-0.8,0.3-1.2,0.9-1.3c0.3,0,0.7,0,1,0c0.2,0,0.4,0.1,0.4,0.3C21.1,7.5,20.9,7.7,20.8,7.9z" />
        </Svg>
        <Text style={styles.channelItemText}>{title}</Text>
    </View>
}

const RoomList = () => {
    let roomData = [
        "announcements", "general", "test"
    ];

    for(let i=0; i<80; i++){
        roomData.push("example" + i.toString());
    }

    roomData = roomData.map((v) => {return {title: v}});

    const renderItem = ({ item }) => {
        return <Channel title={item.title} />
    }

    return <View style={styles.channels}>
        <FlatList
            data={roomData}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    </View>
}

const SideBar = () => {


    return <View style={styles.sideBar}>
        <SpaceList />
        <RoomList />
    </View>
}

const styles = StyleSheet.create({
    sideBar: {
        flex: 4,
        height: "100%",
        backgroundColor: "#000000",
        color: "#ffffff",
        flexDirection: "row",

        marginTop: StatusBar.currentHeight || 0,
    },

    text: {
        color: "#ffffff",
        fontSize: 16
    },

    spaces: {
        width: SPACE_IMAGE_SIZE + 16,
        paddingLeft: 8,
        paddingRight: 8,
    },

    channels: {
        flex: 1
    },

    spaceItem: {
        paddingTop: 8
    },

    channelItem: {
        padding: 8,
        flexDirection: "row"
    },

    channelItemImage: {
        color: colors.greyInactive,
        marginRight: 8,
    },

    channelItemText: {
        color: colors.greyInactive,
        fontSize: 16
    }
});

export default SideBar;