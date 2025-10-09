import { Sidebar } from "@/components/Sidebar";

const Consulting = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-4">Consulting</h1>
          <p className="text-muted-foreground">Project management and consulting services</p>
        </div>
      </main>
    </div>
  );
};

export default Consulting;
