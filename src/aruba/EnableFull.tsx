import React from 'react';
import { IoIosCopy } from "react-icons/io";
import Copy from './Copy';
interface DisableCommandBoxProps {
  keyActive: string;
}

const EnableFullCommandBox: React.FC<DisableCommandBoxProps> = ({ keyActive }) => {
  const commandFull = `
configure terminal
wlan ssid-profile ${keyActive}1
enable
exit
wlan ssid-profile ${keyActive}2
enable
exit
wlan ssid-profile ${keyActive}3
enable
exit
wlan ssid-profile ${keyActive}4
enable
exit
wlan ssid-profile ${keyActive}5
enable
exit
wlan ssid-profile ${keyActive}6
enable
exit
wlan ssid-profile ${keyActive}7
enable
exit
wlan ssid-profile ${keyActive}8
enable
exit
wlan ssid-profile ${keyActive}9
enable
exit
wlan ssid-profile ${keyActive}10
enable
exit
wlan ssid-profile ${keyActive}11
enable
exit
wlan ssid-profile ${keyActive}12
enable
exit
wlan ssid-profile ${keyActive}13
enable
exit
wlan ssid-profile ${keyActive}14
enable
exit
wlan ssid-profile ${keyActive}15
enable
exit
wlan ssid-profile ${keyActive}16
enable
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

export default EnableFullCommandBox;
