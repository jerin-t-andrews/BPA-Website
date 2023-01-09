import React, {Component} from 'react'
import ChatBotObject from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

class ChatBot extends Component {
    state = {
        opened: false
    }

    toggleFloating = ({opened}) => {
        this.setState({opened});
    }

    render() {
        const { opened } = this.state;
        const steps = [
            {
                id: '1',
                message: 'What may I help you with today',
                trigger: '2'
            },
            {
                id: '2',
                options: [
                    {value: 1, label: 'Shop', trigger: '3'},
                    {value: 2, label: 'Link to Representatives', trigger: '4'},
                ]
            },
            {
                id: '3',
                component: (
                    <div></div>
                ),
                // message: 'Here is a link to the shop, in the shop you can filter through the various car options and view a variety of car models',
                trigger: '5'
            },
            {
                id: '4',
                message: 'To contact a representative, either go to the contact page or contact either caravelleauto.gmail.com or (972) 277-1889',
                trigger: '5'
            },
            {
                id: '5',
                message: "Anything else I can help you with?",
                trigger: '2'
            }
        ]

        const theme = {
            background: 'rgb(251, 255, 230)',
        }
        
        const istyle = {
            border: '0',
            width: '0px',
            height: '0px'
        }

        const fstyle = {
            'cursor': 'pointer',
            'align-items': 'center',
            background: '{({ theme }) => theme.headerBgColor}',
            bottom: '32px',
            'border-radius': '0 12px 24px 0 rgba(0, 0, 0, 0.15)',
            display: 'flex',
            fill: '{({theme}) => theme.headerFontColor}',
            height: '56px',
            'justify-content': 'center',
            position: 'fixed',
            right: '32px',
            transition: 'transform 0.3s ease',
            width: '56px',
            'z-index': '999',
            'background-color': 'white'
        }

        fstyle.defaultProps = {
            theme: {
                headerBgColor: 'rgb(231, 232, 227)',
                headerFontColor: '#fff'
            }
        };
        
        return (
            <div className='ChatWindow'>
                <ThemeProvider theme={theme}>
                    <ChatBotObject 
                        steps={steps} 
                        hideSubmitButton={true} 
                        hideHeader={false} 
                        placeholder="" 
                        inputStyle={istyle}
                        customDelay={500}
                        hideBotAvatar={true}
                        floating={true}
                        opened={opened}
                        toggleFloating={this.toggleFloating}
                        floatingStyle = {fstyle}
                        />
                </ThemeProvider>
            </div>
        )
    }
}

export default ChatBot