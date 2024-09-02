export default function DashboardLayout (
  {
    children,
    contact,
    notification,
    quizz
  }:{
    children: React.ReactNode,
    contact: React.ReactNode,
    notification: React.ReactNode,
    quizz: React.ReactNode
  }
) {
  
  return (
    <div>
      {children}
      <div className="flex flex-wrap gap-5">
        {contact}
        {notification}
        {quizz}
      </div>
    </div>
  )
}