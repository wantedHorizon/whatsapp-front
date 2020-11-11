import { useEffect, useState } from 'react';
import './App.css';
import Chat from './containers/Chat/Chat';
import Sidebar from './containers/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import whatsappAPI from './api/whatsappAPI';
function App() {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {

        const data = await whatsappAPI.get('/messages/sync');
        // console.log(data);
        setMessages(data.data);
      } catch (error) {

      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    var pusher = new Pusher('45ba778d06268424874b', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMsg) {
      // alert(JSON.stringify(newMsg));
      setMessages([...messages, newMsg])
    });

    return () => {
      // channel.unbind__all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);
  return (
    <div className="app">

      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />

      </div>
    </div>
  );
}

export default App;
