

export default function Timer({children, loading = true}) {

    return (
        <>
        {loading ? <h2>Cargando...</h2> : children}
        </>
    )
}
