import React from 'react';
import { IoIosCopy } from "react-icons/io";
import Copy from './Copy';
interface DisableCommandBoxProps {
  keyActive: string;
}

const DisableFullCommandBox: React.FC<DisableCommandBoxProps> = ({ keyActive }) => {
  const commandFull = `
configure terminal
wlan ssid-profile ${keyActive}1
disable
exit
wlan ssid-profile ${keyActive}2
disable
exit
wlan ssid-profile ${keyActive}3
disable
exit
wlan ssid-profile ${keyActive}4
disable
exit
wlan ssid-profile ${keyActive}5
disable
exit
wlan ssid-profile ${keyActive}6
disable
exit
wlan ssid-profile ${keyActive}7
disable
exit
wlan ssid-profile ${keyActive}8
disable
exit
wlan ssid-profile ${keyActive}9
disable
exit
wlan ssid-profile ${keyActive}10
disable
exit
wlan ssid-profile ${keyActive}11
disable
exit
wlan ssid-profile ${keyActive}12
disable
exit
wlan ssid-profile ${keyActive}13
disable
exit
wlan ssid-profile ${keyActive}14
disable
exit
wlan ssid-profile ${keyActive}15
disable
exit
wlan ssid-profile ${keyActive}16
disable
exit
exit
commit apply`;

  return (
    <div>
         <IoIosCopy size={30} onClick={() => Copy(commandFull.trim())}/>
         <div
           style={{
             backgroundColor: '#f5f5f5',
             padding: '1rem',
             borderRadius: '8px',
             fontFamily: 'monospace',
             whiteSpace: 'pre-wrap',
             overflowX: 'auto',
             height: 250,
             width: 240,
           }}
         >
          
           {commandFull.trim()}
         </div>
    </div>
  );
};

export default DisableFullCommandBox;
