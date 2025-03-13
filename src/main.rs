use iced::{Application, Settings, executor, Command, Element, Column, Text};
use iced::window::Icon;
use iced::window::Settings as WindowSettings;

struct MyApp;

impl Application for MyApp {
    type Executor = executor::Default;
    type Message = ();
    type Flags = ();

    fn new(_flags: Self::Flags) -> (Self, Command<Self::Message>) {
        (MyApp, Command::none())
    }

    fn title(&self) -> String {
        String::from("My Rust Application")
    }

    fn update(&mut self, _message: Self::Message) -> Command<Self::Message> {
        Command::none()
    }

    fn view(&mut self) -> Element<Self::Message> {
        Column::new()
            .push(Text::new("Chat List Placeholder"))
            .push(Text::new("Sidebar Placeholder"))
            .into()
    }
}

fn main() -> iced::Result {
    let icon = Icon::from_rgba(vec![0; 4], 1, 1).unwrap();
    let window_settings = WindowSettings {
        size: (800, 600),
        resizable: true,
        decorations: true,
        icon: Some(icon),
        ..WindowSettings::default()
    };

    MyApp::run(Settings {
        window: window_settings,
        ..Settings::default()
    })
}
