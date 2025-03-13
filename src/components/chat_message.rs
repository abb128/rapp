use iced::{Element, Text};
use iced::widget::{Column, Container, Row};
use iced::alignment::{Horizontal, Vertical};

use crate::components::avatar::Avatar;
use crate::constants::colors;
use crate::constants::sizes::PROFILE_IMAGE_SIZE;

pub struct ChatMessage {
    pub author: String,
    pub avatar: Option<String>,
    pub message: String,
    pub timestamp: Option<i64>,
}

impl ChatMessage {
    pub fn new(author: String, avatar: Option<String>, message: String, timestamp: Option<i64>) -> Self {
        ChatMessage { author, avatar, message, timestamp }
    }

    pub fn view(&self) -> Element<()> {
        let time_text = self.format_timestamp();

        Row::new()
            .push(Avatar::new(self.author.clone(), self.avatar.clone(), PROFILE_IMAGE_SIZE).view())
            .push(
                Column::new()
                    .push(
                        Row::new()
                            .push(Text::new(&self.author).size(16).color(colors::BRAND_PRIMARY))
                            .push(Text::new(&time_text).size(11).color(colors::GREY_INACTIVE))
                    )
                    .push(Text::new(&self.message).size(14).color(colors::WHITE))
            )
            .into()
    }

    fn format_timestamp(&self) -> String {
        if let Some(timestamp) = self.timestamp {
            let now = chrono::Utc::now().timestamp();
            let then = chrono::NaiveDateTime::from_timestamp(timestamp, 0);
            let duration = now - timestamp;

            if duration < 86400 && chrono::Utc::now().date() == then.date() {
                format!("Today at {}", then.format("%I:%M %p"))
            } else if duration < 172800 && chrono::Utc::now().date().pred() == then.date() {
                format!("Yesterday at {}", then.format("%I:%M %p"))
            } else {
                then.format("%Y-%m-%d %I:%M %p").to_string()
            }
        } else {
            "???".to_string()
        }
    }
}
