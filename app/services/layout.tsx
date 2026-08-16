import RequireAuth from '../../components/RequireAuth';
export default function ServicesLayout({children}:{children:React.ReactNode}){return <RequireAuth>{children}</RequireAuth>}
