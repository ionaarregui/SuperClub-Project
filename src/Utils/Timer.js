export default function Timer({ children, loading = true }) {
  return <>{loading ? <h3 className="loader colorPrincipal">Cargando...</h3> : children}</>
}
