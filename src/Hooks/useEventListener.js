import {useEffect} from "react";

export default function useEventListener(type,callback) {
    useEffect(()=>{
        window.addEventListener(type,(event)=>{
            callback(event)
        })
        return () => {
            window.removeEventListener(type,(event)=>{
                callback(event)
            })
        }
    },[])
};