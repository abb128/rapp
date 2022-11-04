import { StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import ChatMessage from "../components/ChatMessage"

const ChatList = () => {
    const fakeData = [
        ["bob", "Hello guys!"],
        ["peter", "Hi"],
        ["bob", "How are you?"],
        ["Rael", "I am Good"],
        ["bob", "I wasn't asking you Biden"],
        ["peter", "Lol"],
        ["sample user", "This is a really long run-on sentence that never ends and this sentence will keep going on for a really long time because this sentence is meant to be super long and wordy and it's just going to keep going on and on and on until the end of time and the end of the universe and the end of the universe and the end of the universe and the end of the universe and the end of the universe and the end of life and I don't know when this sentence will end it's just meant to be a really long wall of text since the beginning of time and the beginning of the universe and the beginning of the universe and the beginning of the universe and the beginning of the universe and the beginning of the universe and the beginning of the universe and the beginning of the universe and the beginning of the universe okay so that was really long and that was a really long sentence that was really long and it demonstrates how the system behaves with really long text that goes on and on."],
        ["sample user", "This is some shorter text that's not as long as my previous text because that one was really long and it went on and on and on but this text is still quite long to some extent and it's quite wordy and difficult to read but it has a lot of words I should've just used lorem ipsum"],
        ["Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta. Lectus nulla at volutpat diam ut venenatis tellus in metus. Purus sit amet luctus venenatis lectus magna fringilla. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Adipiscing elit pellentesque habitant morbi. Nunc vel risus commodo viverra. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nunc pulvinar sapien et ligula. Elementum curabitur vitae nunc sed velit dignissim.\nSuscipit adipiscing bibendum est ultricies integer. Maecenas volutpat blandit aliquam etiam erat velit. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Nascetur ridiculus mus mauris vitae ultricies. Viverra adipiscing at in tellus integer. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Donec massa sapien faucibus et molestie ac feugiat sed. Massa vitae tortor condimentum lacinia quis vel eros donec. Erat imperdiet sed euismod nisi porta. Rhoncus mattis rhoncus urna neque viverra. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Elit ut aliquam purus sit amet. Urn"],
        ["Obama", "Obama"],
        ["SpamBot", "SpamBot"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["SpamBot", "spam lol"],
        ["Rael", "You will go to jail now"],
        ["Rael", "really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text really long text "],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["Rael", "I am Good"],
        ["bob", "Hello guys!"],
        ["User", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta. Lectus nulla at volutpat diam ut venenatis tellus in metus. Purus sit amet luctus venenatis lectus magna fringilla. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Adipiscing elit pellentesque habitant morbi. Nunc vel risus commodo viverra. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nunc pulvinar sapien et ligula. Elementum curabitur vitae nunc sed velit dignissim."],
        ["User", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta. Lectus nulla at volutpat diam ut venenatis tellus in metus. Purus sit amet luctus venenatis lectus magna fringilla. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Adipiscing elit pellentesque habitant morbi. Nunc vel risus commodo viverra. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nunc pulvinar sapien et ligula. Elementum curabitur vitae nunc sed velit dignissim."],
        ["User", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta. Lectus nulla at volutpat diam ut venenatis tellus in metus. Purus sit amet luctus venenatis lectus magna fringilla. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Adipiscing elit pellentesque habitant morbi. Nunc vel risus commodo viverra. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nunc pulvinar sapien et ligula. Elementum curabitur vitae nunc sed velit dignissim."],
        ["User", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta. Lectus nulla at volutpat diam ut venenatis tellus in metus. Purus sit amet luctus venenatis lectus magna fringilla. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Adipiscing elit pellentesque habitant morbi. Nunc vel risus commodo viverra. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nunc pulvinar sapien et ligula. Elementum curabitur vitae nunc sed velit dignissim."],
        ["User", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Proin fermentum leo vel orci porta. Lectus nulla at volutpat diam ut venenatis tellus in metus. Purus sit amet luctus venenatis lectus magna fringilla. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Adipiscing elit pellentesque habitant morbi. Nunc vel risus commodo viverra. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Nunc pulvinar sapien et ligula. Elementum curabitur vitae nunc sed velit dignissim."],
    ].map((v, k) => ({id: k, author: v[0], message: v[1], timestamp: new Date().setTime((new Date()).getTime() - Math.random()*360000000 ) }) );

    const renderItem = ({item}) => (
        <ChatMessage {...item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={fakeData}
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