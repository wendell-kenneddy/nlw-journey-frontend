import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  onClose: () => void;
  onRemoveGuest: (email: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  emails: string[];
}

export function InviteGuestsModal({
  onClose,
  onRemoveGuest,
  onSubmit,
  emails,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Selecionar convidados </h2>

            <Button variant="transparent" name="close modal" onClick={onClose}>
              <X className="size-5 text-zinc-400" />
            </Button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emails.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-3"
            >
              <span className="text-300">{email}</span>

              <Button
                variant="transparent"
                name="remove guest"
                onClick={() => onRemoveGuest(email)}
              >
                <X className="size-4 text-zinc-400" />
              </Button>
            </div>
          ))}
        </div>

        <div className="h-pixel w-full bg-zinc-800"></div>

        <form
          onSubmit={onSubmit}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="flex items-center gap-2 flex-1">
            <AtSign className="text-zinc-400 size-5" />

            <input
              type="email"
              id="guest-email"
              name="guest-email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder:zinc-400 flex-1 outline-none"
            />
          </div>

          <Button>
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
