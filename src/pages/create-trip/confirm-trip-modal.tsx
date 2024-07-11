import { User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripProps {
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({ onClose, onSubmit }: ConfirmTripProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Confirmar criação de viagem</h2>

            <Button variant="transparent" name="close modal" onClick={onClose}>
              <X className="size-5 text-zinc-400" />
            </Button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de{" "}
            <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha
            seus dados abaixo:
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
            <User className="text-zinc-400 size-5" />

            <input
              type="text"
              name="owner-name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder:zinc-400 flex-1 outline-none"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
            <User className="text-zinc-400 size-5" />

            <input
              type="email"
              name="owner-email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder:zinc-400 flex-1 outline-none"
            />
          </div>

          <Button size="full">Confirmar criação da viagem</Button>
        </form>
      </div>
    </div>
  );
}
