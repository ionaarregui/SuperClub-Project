import { useEffect, useState } from "react";


export default function Timer({children}) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    },[])

    return (
        <>
        {loading ? <h2>Cargando...</h2> : children}
        </>
    )
}
