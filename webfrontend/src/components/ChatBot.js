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
                    {value: 1, label: 'Used Cars', trigger: '3'},
                    {value: 2, label: 'New Cars', trigger: '4'},
                ]
            },
            {
                id: '3',
                message: 'Here are the results for Used Cars',
                trigger: '1'
            },
            {
                id: '4',
                message: 'Here are the results for New Cars',
                trigger: '1'
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