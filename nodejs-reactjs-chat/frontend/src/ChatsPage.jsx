import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
            projectId='7ff0c0f5-8b18-4df9-a714-d026bd543094'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage