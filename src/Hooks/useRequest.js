import {useEffect, useState} from "react";
import useDebounce from "./useDebounce";

export default function (request, changeValue) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getRequest = () => {
        if (changeValue !== ""){
            setLoading(true)
            request()
                .then(response => setData(response))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }
        else {
            setData([])
        }
    }

    const debouncedChange = useDebounce(getRequest, 400)

    useEffect(() => {
        debouncedChange(changeValue)
    }, [changeValue])

    return [data, loading, error]
};