import { StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import ChatMessage from "../components/ChatMessage"

const ChatList = () => {
    const RANDOM_MESSAGES = [
        "Hello",
        "Hi",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta. Lectus nulla at volutpat diam ut venenatis tellus in metus. Purus sit amet luctus venenatis lectus magna fringilla. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Adipiscing elit pellentesque habitant morbi. Nunc vel risus commodo viverra. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nunc pulvinar sapien et ligula. Elementum curabitur vitae nunc sed velit dignissim.\nSuscipit adipiscing bibendum est ultricies integer. Maecenas volutpat blandit aliquam etiam erat velit. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Nascetur ridiculus mus mauris vitae ultricies. Viverra adipiscing at in tellus integer. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Donec massa sapien faucibus et molestie ac feugiat sed. Massa vitae tortor condimentum lacinia quis vel eros donec. Erat imperdiet sed euismod nisi porta. Rhoncus mattis rhoncus urna neque viverra. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Elit ut aliquam purus sit amet. Urn",
        "Hello hello hello hello hello hello hello hello Hello hello hello hello hello hello hello hello Hello hello hello hello hello hello hello hello Hello hello hello hello hello hello hello hello Hello hello hello hello hello hello hello hello",
        "Goodbye Goodbye Goodbye Goodbye Goodbye Goodbye Goodbye Goodbye Goodbye Goodbye",
        "really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text ",
        "You speak an infinite deal of nothing.",
        "To die, to sleep - To sleep, perchance to dream - ay, there's the rub, For in this sleep of death what dreams may come",
        "With mirth and laughter let old wrinkles come.",
        "Conscience doth make cowards of us all",
        "Some are born great, others achieve greatness",
        "Sweets to the sweet",
        "Some Cupid kills with arrows, some with traps",
        "All's well that ends well.",
        "I am a cage, in search of a bird",
        "I am free and that is why I am lost.",
        "The meaning of life is that it stops",
        "All language is but a poor translation",
        "Paths are made by walking",
        "Books are a narcotic",
        "640K ought to be enough for anybody",
    ]
    let chatData = [];

    for(let i=0; i<240; i++){
        chatData.push({
            id: i,
            author: "User" + i.toString(),
            message: RANDOM_MESSAGES[i % RANDOM_MESSAGES.length],
            timestamp: new Date().setTime((new Date()).getTime() - i*360000000)
        })
    }

    const renderItem = ({item}) => (
        <ChatMessage {...item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={chatData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                inverted={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }
});


export default ChatList;