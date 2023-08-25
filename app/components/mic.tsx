"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { useStore } from "@nanostores/react";
// @ts-ignore
import MicRecorder from "mic-recorder-to-mp3";
import { $anstts, $qestts } from "./stats";

interface MicProps {}

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const Mic: FC<MicProps> = (props) => {
  const [state, setState] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(
      () => {
        console.log("Permission Granted");
        setState((map) => {
          map.isBlocked = false;
          return map;
        });
      },
      () => {
        console.log("Permission Denied");
        setState((map) => {
          map.isBlocked = true;
          return map;
        });
      },
    );
  }, []);

  const start = () => {
    if (state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setState((map) => {
            map.isRecording = true;
            return map;
          });
        })
        // @ts-ignore
        .catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      // @ts-ignore
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setState((map) => {
          map.blobURL = blobURL;
          console.log(blobURL);
          map.isRecording = false;
          return map;
        });
      })
      // @ts-ignore
      .catch((e) => console.log(e));
  };

  const saveBlob = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    // a.style = "display: none";
    // @ts-ignore
    return function (blob, fileName: string) {
      console.log(blob);
      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  })();

  return (
    <>
      <button onClick={start}>Record</button>
      <button onClick={stop}>Stop</button>
      <button onClick={() => saveBlob(state.blobURL, "./v.mp3")}>Save</button>
      <button
        onClick={async () => {
          fetch("/api/audio?" + new URLSearchParams({ url: state.blobURL }))
            .then((res) => res.json())
            .then((json) => json["answer"])
            .then((txt) => $qestts.set(txt));
        }}
      >
        Send
      </button>
    </>
  );
};

export default Mic;
