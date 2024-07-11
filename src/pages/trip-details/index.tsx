import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guets";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function handleCreateActivity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16">
        <section className="flex-1 space-y-6">
          <header className="flex items-center justify-between">
            <h1 className="font-semibold text-3xl">Atividades</h1>

            <Button onClick={openCreateActivityModal}>
              <Plus className="size-5 text-lime-950" />
              Cadastrar atividade
            </Button>
          </header>

          <Activities />
        </section>

        <section className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </section>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal onClose={closeCreateActivityModal} onSubmit={handleCreateActivity} />
      )}
    </div>
  );
}
