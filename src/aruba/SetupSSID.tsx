import React from 'react';
import { IoIosCopy } from "react-icons/io";
import Copy from './Copy';
interface DisableCommandBoxProps {
  keyActive: string;
  vlanFrom: number;
  partID: 1 | 2;
}

const SetupSSID: React.FC<DisableCommandBoxProps> = ({ keyActive, vlanFrom, partID }) => {
  const commandPart_1 = `
configure terminal
wlan ssid-profile ${keyActive}1
 enable
 type employee
 essid ${keyActive}1
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom}-${vlanFrom + 1}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}2
 enable
 type employee
 essid ${keyActive}2
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 2}-${vlanFrom + 3}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}3
 enable
 type employee
 essid ${keyActive}3
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 4}-${vlanFrom + 5}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}4
 enable
 type employee
 essid ${keyActive}4
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 6}-${vlanFrom + 7}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}5
 enable
 type employee
 essid ${keyActive}5
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 8}-${vlanFrom + 9}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}6
 enable
 type employee
 essid ${keyActive}6
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 10}-${vlanFrom + 11}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}7
 enable
 type employee
 essid ${keyActive}7
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 12}-${vlanFrom + 13}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}8
 enable
 type employee
 essid ${keyActive}8
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 14}-${vlanFrom + 15}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan access-rule ${keyActive}1
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}2
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}3
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}4
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}5
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}6
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}7
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}8
 rule any any match any any any permit
exit
exit
commit apply
`;

const commandPart_2 = `
configure terminal
wlan ssid-profile ${keyActive}9
 enable
 type employee
 essid ${keyActive}9
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 16}-${vlanFrom + 17}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}10
 enable
 type employee
 essid ${keyActive}10
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 18}-${vlanFrom + 19}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}11
 enable
 type employee
 essid ${keyActive}11
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 20}-${vlanFrom + 21}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}12
 enable
 type employee
 essid ${keyActive}12
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 22}-${vlanFrom + 23}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}13
 enable
 type employee
 essid ${keyActive}13
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 24}-${vlanFrom + 25}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}14
 enable
 type employee
 essid ${keyActive}14
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 26}-${vlanFrom + 27}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}15
 enable
 type employee
 essid ${keyActive}15
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 28}-${vlanFrom + 29}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan ssid-profile ${keyActive}16
 enable
 type employee
 essid ${keyActive}16
 wpa-passphrase 12345678
 opmode wpa2-psk-aes
 max-authentication-failures 0
 vlan ${vlanFrom + 30}-${vlanFrom + 31}
 rf-band all
 captive-portal disable
 dtim-period 1
 inactivity-timeout 420
 broadcast-filter arp
 dmo-channel-utilization-threshold 90
 local-probe-req-thresh 0
 max-clients-threshold 64
exit
wlan access-rule ${keyActive}9
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}10
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}11
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}12
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}13
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}14
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}15
 rule any any match any any any permit
exit
wlan access-rule ${keyActive}16
 rule any any match any any any permit
exit
exit
commit apply
`;

const outputCommand = partID === 1 ? commandPart_1 : commandPart_2;
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

export default SetupSSID;
