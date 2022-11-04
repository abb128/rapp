import { StyleSheet, View, Text, FlatList, SafeAreaView, StatusBar, Image } from "react-native";
import { useMemo } from "react";
import colors from "../constants/colors";
import { PROFILE_IMAGE_SIZE } from "../constants/sizes"
import Avatar from "./Avatar"

const DAY = 1000 * 3600 * 24;

const ChatMessage = ({ author, avatar, message, timestamp }) => {
    const timeText = useMemo(() => {
        if(timestamp === undefined) {
            return "???";
        }

        const now = new Date(); // TODO
        const then = new Date(timestamp);

        const getHourString = () => {
            const v = String(then.getHours() % 12);
            return (v == '0') ? '12' : v;
        }
        
        const getMinuteString = () => {
            return String(then.getMinutes()).padStart(2, '0');
        }

        const getTimeString = () => getHourString() + ":" + getMinuteString() + " " + ((then.getHours() >= 12) ? "PM" : "AM");
        const getDateString = () => then.toISOString().split("T")[0];

        then.toTimeString
        if( ((now - then) < DAY) && (now.getDate() == then.getDate()) ) {
            return "Today at " + getTimeString();
        }else if ( ((now - then) < 2*DAY) && (now.getDate() == (then.getDate()+1) ) ) {
            return "Yesterday at " + getTimeString();
        }else {
            return getDateString() + " " + getTimeString();
        }
    }, [timestamp]); // TODO: Add current day as dependency, so Today -> Yesterday at midnight

    return (
        <View style={chatStyles.chatMessageRoot}>
            <Avatar author={author} avatar={avatar} />
            <View style={chatStyles.messageR}>
                <View style={chatStyles.authorNameAndTime}>
                    <Text style={chatStyles.authorName}>{author}</Text>
                    <Text style={chatStyles.timeSent}>{timeText}</Text>
                </View>

                <Text style={chatStyles.messageText}>{message}</Text>
            </View>
        </View>
    )
};

const chatStyles = StyleSheet.create({
    chatMessageRoot: {
        padding: 8,
        width: "100%",
        maxWidth: "100%",
        flexDirection: "row",
    },

    messageR: {
        marginRight: PROFILE_IMAGE_SIZE+8,
        marginLeft: 8
    },

    authorNameAndTime: {
        flexDirection: "row",
        paddingBottom: 2
    },

    authorName: {
        color: colors.brandPrimary,
        fontWeight: "700",
        fontSize: 16,
        marginRight: 6
    },

    messageText: {
        color: colors.white,
        fontSize: 14,
    },

    timeSent: {
        color: colors.greyInactive,
        fontSize: 11,
        textAlignVertical: "bottom",
        fontWeight: "400",
        marginBottom: 2
    }
});


export default ChatMessage;