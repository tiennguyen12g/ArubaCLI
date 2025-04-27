import React from 'react';
import { IoIosCopy } from "react-icons/io";
import Copy from './Copy';
interface DisableCommandBoxProps {
  keyActive: string;
}
// halfID = "Small" is turn on from 1-8 and turn off 9-16
const HideFull: React.FC<DisableCommandBoxProps> = ({ keyActive, }) => {

const commandHideFull = `
configure terminal
wlan ssid-profile ${keyActive}1
hide
exit
wlan ssid-profile ${keyActive}2
hide
exit
wlan ssid-profile ${keyActive}3
hide
exit
wlan ssid-profile ${keyActive}4
hide
exit
wlan ssid-profile ${keyActive}5
hide
exit
wlan ssid-profile ${keyActive}6
hide
exit
wlan ssid-profile ${keyActive}7
hide
exit
wlan ssid-profile ${keyActive}8
hide
exit
wlan ssid-profile ${keyActive}9
hide
exit
wlan ssid-profile ${keyActive}10
hide
exit
wlan ssid-profile ${keyActive}11
hide
exit
wlan ssid-profile ${keyActive}12
hide
exit
wlan ssid-profile ${keyActive}13
hide
exit
wlan ssid-profile ${keyActive}14
hide
exit
wlan ssid-profile ${keyActive}15
hide
exit
wlan ssid-profile ${keyActive}16
hide
exit
exit
commit apply`;

  return (
    <div>
         <IoIosCopy size={30} onClick={() => Copy(commandHideFull.trim())}/>
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
          
           {commandHideFull.trim()}
         </div>
    </div>
  );
};

export default HideFull;
