import React from 'react';
import { IoIosCopy } from "react-icons/io";
import Copy from './Copy';
interface DisableCommandBoxProps {
  keyActive: string;
  halfID: string;
}
// halfID = "Small" is turn on from 1-8 and turn off 9-16
const HideHalf: React.FC<DisableCommandBoxProps> = ({ keyActive, halfID }) => {
  const commandHalf_Small = `
configure terminal
wlan ssid-profile ${keyActive}1
no hide
exit
wlan ssid-profile ${keyActive}2
no hide
exit
wlan ssid-profile ${keyActive}3
no hide
exit
wlan ssid-profile ${keyActive}4
no hide
exit
wlan ssid-profile ${keyActive}5
no hide
exit
wlan ssid-profile ${keyActive}6
no hide
exit
wlan ssid-profile ${keyActive}7
no hide
exit
wlan ssid-profile ${keyActive}8
no hide
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


const commandHalf_Big = `
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
no hide
exit
wlan ssid-profile ${keyActive}10
no hide
exit
wlan ssid-profile ${keyActive}11
no hide
exit
wlan ssid-profile ${keyActive}12
no hide
exit
wlan ssid-profile ${keyActive}13
no hide
exit
wlan ssid-profile ${keyActive}14
no hide
exit
wlan ssid-profile ${keyActive}15
no hide
exit
wlan ssid-profile ${keyActive}16
no hide
exit
exit
commit apply`;

const outputCommand = halfID === "big" ? commandHalf_Big : commandHalf_Small;
  return (
    <div>
         <IoIosCopy size={30} onClick={() => Copy(outputCommand.trim())}/>
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
          
           {outputCommand.trim()}
         </div>
    </div>
  );
};

export default HideHalf;
