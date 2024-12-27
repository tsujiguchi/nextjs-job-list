export default function JobsLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className="flex w-full max-w-6xl mx-auto gap-4 p-4">
      {children}

      <div>
        {modal}
      </div>
    </div>
  )
}
