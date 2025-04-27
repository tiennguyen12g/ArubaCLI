import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ArubaCLI.module.scss";
const cx = classNames.bind(styles);
import DisableFullCommandBox from "./DisableFull";
import EnableFullCommandBox from "./EnableFull";
import HideHalf from "./HideHalf";
import HideFull from "./HideFull";
import OpenFull from "./OpenFull";
import SetupSSID from "./SetupSSID";
interface ArubaDeviceInfo {
  name: string;
  keyID: string;
  type: "full" | "half";
  mikrotikID: number;
}
export default function ArubaCLI() {
  const [deviceActive, setDeviceActive] = useState("a-1");
  const [keyActive, setKeyActive] = useState("a");
  const [modeActive, setModeActive] = useState("utility");
     const [vlanFrom, setVlanFrom] = useState(1);
  const handleChangeDeviceActive = (name: string, keyID: string) => {
    if (name !== deviceActive) {
      setDeviceActive(name);
      setKeyActive(keyID);
    }
  };
  const handleChangeModeActive = (mode: string) => {
    if (mode !== modeActive) {
      setModeActive(mode);
    }
  };

  const handleGetVlanID = (e: React.ChangeEvent<HTMLInputElement>) => {
     const value = e.target.value;
     if(value){
          setVlanFrom(Number(value))
     }
     
  }
  // Render command for Utility

  return (
    <div>
      <h4>Aruba Command Line Interface</h4>
      <div>
        <div>
             <span style={{fontSize: 26}}>Mikrotik 1: </span>
             {deviceData.map((device: ArubaDeviceInfo, i: number) => {
               return (
                 <React.Fragment key={i}>
                   {device.mikrotikID === 1 ? (
                     <button
                       onClick={() => handleChangeDeviceActive(device.name, device.keyID)}
                       style={{ backgroundColor: device.name === deviceActive ? "orange" : "gainsboro", marginRight: 10 }}
                     >
                       {device.name}
                     </button>
                   ) : (
                     ""
                   )}
                 </React.Fragment>
               );
             })}
        </div>
        <div style={{marginTop: 10}}>
             <span style={{fontSize: 26}}>Mikrotik 2: </span>
             {deviceData.map((device: ArubaDeviceInfo, i: number) => {
               return (
                 <React.Fragment key={i}>
                   {device.mikrotikID === 2 ? (
                     <button
                       onClick={() => handleChangeDeviceActive(device.name, device.keyID)}
                       style={{ backgroundColor: device.name === deviceActive ? "orange" : "gainsboro", marginRight: 10 }}
                     >
                       {device.name}
                     </button>
                   ) : (
                     ""
                   )}
                 </React.Fragment>
               );
             })}
        </div>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          <button
            onClick={() => handleChangeModeActive("utility")}
            style={{ backgroundColor: modeActive === "utility" ? "orange" : "gainsboro", marginRight: 10 }}
          >
            Utility
          </button>
          <button
            onClick={() => handleChangeModeActive("setup")}
            style={{ backgroundColor: modeActive === "setup" ? "orange" : "gainsboro", marginRight: 10 }}
          >
            Setup
          </button>
        </div>
        {/* Utility */}
        {modeActive === "utility" && (
          <div>
            <div className={cx("utility-full")}>
              <div className={cx("box-utility")}>
                <h4>Disable Full:</h4>
                <DisableFullCommandBox keyActive={keyActive} />
              </div>
              <div className={cx("box-utility")}>
                <h4>Enable Full:</h4>
                <EnableFullCommandBox keyActive={keyActive} />
              </div>
              <div className={cx("box-utility")}>
                <h4>Hide Full:</h4>
                <HideFull keyActive={keyActive} />
              </div>
              <div className={cx("box-utility")}>
                <h4>Open Full:</h4>
                <OpenFull keyActive={keyActive} />
                {/* <HideHalf keyActive={keyActive} /> */}
              </div>
            </div>
            <div className={cx("utility-full")}>
              <div className={cx("box-utility")}>
                <h4>Open: 1-8 && Hide: 9-16</h4>
                <HideHalf keyActive={keyActive} halfID="small" />
              </div>
              <div className={cx("box-utility")}>
                <h4>Open: 9-16 && Hide: 1-8</h4>
                <HideHalf keyActive={keyActive} halfID="big" />
              </div>
            </div>
          </div>
        )}
        {modeActive === "setup" && (
          <>
               <div style={{ margin: 10}}>
                    <input style={{height: 30}} type="number" onChange={handleGetVlanID}/>
               </div>
               <div className={cx("utility-full")}>
                    
                    <div className={cx("box-utility")}>
                         <h3>Part 1:</h3>
                         <SetupSSID keyActive={keyActive} vlanFrom={vlanFrom} partID={1}/>
                    </div>
                    <div className={cx("box-utility")}>
                         <h3>Part 2:</h3>
                         <SetupSSID keyActive={keyActive} vlanFrom={vlanFrom} partID={2}/>
                    </div>
               </div>
          </>
        )}
      </div>
    </div>
  );
}

const deviceData: ArubaDeviceInfo[] = [
  {
    name: "a-1",
    keyID: "a-",
    type: "full",
    mikrotikID: 1,
  },
  {
    name: "b-1",
    keyID: "b-",
    type: "full",
    mikrotikID: 1,
  },
  {
    name: "c-1",
    keyID: "c-",
    type: "full",
    mikrotikID: 1,
  },
  {
     name: "d-1",
     keyID: "d-",
     type: "full",
     mikrotikID: 1,
   },
   {
     name: "e1",
     keyID: "e",
     type: "half",
     mikrotikID: 1,
   },
   {
      name: "f1",
      keyID: "f",
      type: "half",
      mikrotikID: 1,
    },
    {
     name: "t1",
     keyID: "t",
     type: "half",
     mikrotikID: 1,
   },
   {
     name: "p1",
     keyID: "p",
     type: "half",
     mikrotikID: 1,
   },
  {
    name: "g-1",
    keyID: "g1-",
    type: "full",
    mikrotikID: 2,
  },
  {
    name: "h-1",
    keyID: "h-",
    type: "full",
    mikrotikID: 2,
  },
  {
    name: "k-1",
    keyID: "k-",
    type: "full",
    mikrotikID: 2,
  },
  {
     name: "x1",
     keyID: "x",
     type: "half",
     mikrotikID: 2,
   },
   {
     name: "y1",
     keyID: "y",
     type: "half",
     mikrotikID: 2,
   },
   {
     name: "z1",
     keyID: "z",
     type: "half",
     mikrotikID: 2,
   },
   {
     name: "u1",
     keyID: "u",
     type: "half",
     mikrotikID: 2,
   },

];
