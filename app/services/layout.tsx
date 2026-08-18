import RequireAuth from '../../components/RequireAuth';
import MyfxbookCTA from '../../components/MyfxbookCTA';

export default function ServicesLayout({children}:{children:React.ReactNode}){
  return <RequireAuth><>{children}<MyfxbookCTA /></></RequireAuth>;
}
