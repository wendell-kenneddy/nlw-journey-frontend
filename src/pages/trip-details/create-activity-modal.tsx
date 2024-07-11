import { Calendar, Tag, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function CreateActivityModal({ onClose, onSubmit }: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Cadastrar atividade</h2>

            <Button onClick={onClose} variant="transparent">
              <X className="size-5 text-zinc-400" />
            </Button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
            <Tag className="text-zinc-400 size-5" />

            <input
              type="text"
              name="activity-title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder:zinc-400 flex-1 outline-none"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
            <Calendar className="text-zinc-400 size-5" />

            <input
              type="datetime-local"
              name="datetime"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder:zinc-400 flex-1 outline-none"
            />
          </div>

          <Button size="full">Salvar</Button>
        </form>
      </div>
    </div>
  );
}
