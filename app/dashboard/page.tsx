import BlogDashboard from '@/components/dashboard/blog-dashboard'
import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar/>
      <BlogDashboard/>
    </div>
  )
}

export default Dashboard
