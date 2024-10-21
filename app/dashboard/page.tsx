// import { fetchResources } from '@/utils/fetchResources';

import Dashboard from "@/components/screen/dashboard/Dashboard";
import { getDashboard } from "@/lib/services/dashboardService";
import { ApiSucess } from "@/types/api";
import { DashBoard } from "@/types/dashborad/dashBoard";



export default async function  DashboardPage() {
 
  const { data }  = await getDashboard() as unknown as ApiSucess<DashBoard[]>;
  console.log('data', data);
  return (
    <Dashboard dashboardData={data}></Dashboard>
  );
}
