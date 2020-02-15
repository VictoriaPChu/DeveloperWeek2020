import React from "react";
import ChatBot from "react-simple-chatbot";
function CustomChatbot(props) {
const config = {
    width: "300px",
    height: "400px",
    floating:true
};
const steps = [
        {
           id: "Greet",
           message: "Hello there!",
           trigger: "Ask Name"
        },
        {
           id: "Ask Name",
           message: "What's your name?",
           trigger: "Waiting user input for name"
        },
        {
           id: "Waiting user input for name",
           user: true,
           trigger: "Asking about your happiness"
        },
        {
           id: "Asking about your happiness",
           message: "Hi {previousValue}, Are you happy or sad today?",
           trigger: "Display happy sad"
        },
        {
           id: "Display happy sad",
           options: [
                      {
                        value: "happy",
                        label: "Happy",
                        trigger: "is happy"
                      },
                      { 
                        value: "sad",
                        label: "Sad",
                        trigger: "is sad"
                      } 
                    ]
        },
        {
           id: "is happy",
           message: "Great! Would you like to talk about why?",
           trigger: "happiness follow up"
        },
        {
           id: "happiness follow up",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: "is sad"
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Done"
                      } 
                    ]
        },
        {
           id: "is sad",
           message: "I'm sorry to hear that. Why are you sad?",
           trigger:"whysad"
        },
	{
	   id: "whysad",
           user:true,
	   trigger:"unsolicited advice"
	},
        
        {
           id: "unsolicited advice",
           message: "Don't give up!",
	   trigger:  () => {
           	props.eventHandler("{previousValue}");
                return "Done"
           }   
        },
 
        {
            id: "Done",
            message: "Have a great day !!",
            end: true
        }
];
    return <ChatBot steps={steps} {...config}/>;
}

export default CustomChatbot;
