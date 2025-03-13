use iced::{Element, Column};
use iced::widget::{Container, Scrollable};
use iced::alignment::{Horizontal, Vertical};

use crate::components::chat_message::ChatMessage;
use crate::constants::colors;

pub struct ChatList {
    pub messages: Vec<ChatMessage>,
}

impl ChatList {
    pub fn new(messages: Vec<ChatMessage>) -> Self {
        ChatList { messages }
    }

    pub fn view(&self) -> Element<()> {
        let message_elements: Vec<Element<()>> = self.messages.iter().map(|msg| msg.view()).collect();

        Scrollable::new(
            Column::new()
                .push(Container::new(Column::with_children(message_elements)))
                .width(iced::Length::Fill)
                .height(iced::Length::Fill)
                .padding(10)
                .background(colors::BLACK_BG)
        )
        .into()
    }
}
