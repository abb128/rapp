use iced::{Element, Image, Length, Text};
use iced::widget::Container;

pub struct Avatar {
    pub author: String,
    pub avatar: Option<String>,
    pub size: u16,
}

impl Avatar {
    pub fn new(author: String, avatar: Option<String>, size: u16) -> Self {
        Avatar { author, avatar, size }
    }

    pub fn view(&self) -> Element<()> {
        let size = Length::Units(self.size);

        if let Some(ref avatar_url) = self.avatar {
            Image::new(avatar_url.clone())
                .width(size)
                .height(size)
                .into()
        } else {
            Container::new(
                Text::new(self.author.chars().next().unwrap().to_string())
                    .size(self.size as u16 / 2)
            )
            .width(size)
            .height(size)
            .center_x()
            .center_y()
            .into()
        }
    }
}
