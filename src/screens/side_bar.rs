use iced::{Element, Column, Container, Scrollable, Text};
use iced::alignment::{Horizontal, Vertical};

use crate::components::avatar::Avatar;
use crate::constants::{colors, sizes};

pub struct SideBar {
    pub spaces: Vec<Space>,
    pub channels: Vec<Channel>,
}

impl SideBar {
    pub fn new(spaces: Vec<Space>, channels: Vec<Channel>) -> Self {
        SideBar { spaces, channels }
    }

    pub fn view(&self) -> Element<()> {
        let space_elements: Vec<Element<()>> = self.spaces.iter().map(|space| space.view()).collect();
        let channel_elements: Vec<Element<()>> = self.channels.iter().map(|channel| channel.view()).collect();

        Scrollable::new(
            Column::new()
                .push(Container::new(Column::with_children(space_elements)))
                .push(Container::new(Column::with_children(channel_elements)))
                .width(iced::Length::Fill)
                .height(iced::Length::Fill)
                .padding(10)
                .background(colors::BLACK_BG)
        )
        .into()
    }
}

pub struct Space {
    pub title: String,
    pub icon: Option<String>,
}

impl Space {
    pub fn new(title: String, icon: Option<String>) -> Self {
        Space { title, icon }
    }

    pub fn view(&self) -> Element<()> {
        let avatar = Avatar::new(self.title.clone(), self.icon.clone(), sizes::SPACE_IMAGE_SIZE);
        avatar.view()
    }
}

pub struct Channel {
    pub title: String,
}

impl Channel {
    pub fn new(title: String) -> Self {
        Channel { title }
    }

    pub fn view(&self) -> Element<()> {
        Container::new(
            Text::new(self.title.clone())
                .size(16)
                .color(colors::GREY_INACTIVE)
        )
        .padding(8)
        .into()
    }
}
