import RequireAuth from '../../components/RequireAuth';
import MyfxbookCTA from '../../components/MyfxbookCTA';
import ProductLegalLinks from '../../components/ProductLegalLinks';

export default function ServicesLayout({children}:{children:React.ReactNode}){
  return <RequireAuth><>{children}<ProductLegalLinks /><MyfxbookCTA /></></RequireAuth>;
}
