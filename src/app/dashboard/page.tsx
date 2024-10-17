import { Dashboard } from '@/components/screen/dashboard/Dashboard';
import { getDashboard } from '@/lib/services/dashboardService';
// import { fetchResources } from '@/utils/fetchResources';

export default async function  DashboardPage() {
 
  const data = await getDashboard();
  console.log('data', data);
  return (
    <Dashboard></Dashboard>
  );
}
