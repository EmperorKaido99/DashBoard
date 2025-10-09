import { Sidebar } from "@/components/Sidebar";

const Payments = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-4">Payments</h1>
          <p className="text-muted-foreground">Invoice tracking and payment management</p>
        </div>
      </main>
    </div>
  );
};

export default Payments;
